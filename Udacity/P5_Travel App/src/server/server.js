//define library
const dotenv = require('dotenv');
dotenv.config();

const path = require('path')
const express = require('./express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');
const cors = require('cors')

// cors is needed to allow requests from another server
app.use(cors({
    origin: 'http://localhost:8080'
}))

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})



app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

projectData = {};
app.get('/apiData', (req, res)=>{
    res.send(apiData);
});

//API https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/examples
const apiKey = process.env.API_KEY;
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1';
console.log(`Your API key is ${process.env.API_KEY}`);

// POST Route
app.post('/addData', async function (req, res){
    const inputURL = req.body.inputText;
    const url = `${baseUrl}?key=${apiKey}&url=${inputURL}&lang=en`;
    const response = await fetch(url);
    try {
        const newData = await response.json();
        // console.log(JSON.stringify(newData));
        let nlpEntry = {
            model: newData.model,
            score_tag: newData.score_tag,
            agreement: newData.agreement,
            subjectivity: newData.subjectivity,
            confidence: newData.confidence,
            irony: newData.irony
        };
        projectData = nlpEntry;
        console.log(projectData);
        res.send(projectData);
    } catch (error) {
        console.log("error", error);
        }
});