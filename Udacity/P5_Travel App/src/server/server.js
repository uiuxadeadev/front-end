//define library
const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const app = require('./express');
const cors = require('cors');
const fetch = require('node-fetch');


// cors is needed to allow requests from another server
app.use(cors({
    origin: 'http://localhost:8080'
}))

console.log(__dirname)

projectData = {};

//API http://www.geonames.org/export/web-services.html
//API https://www.weatherbit.io/account/dashboard
//API https://pixabay.com/api/docs/#api_search_images

// POST Route
app.post('/addTrip', async (req, res) => {
    const destination = req.body.city;

    try{
        const resultImage = await getImage(destination);
        const resultGeoData = await getGeoData(destination);
        const resultWeather = await getWeather(resultGeoData);
        //Should I give "destination" to getWeather?
        //or should I put "city: name" into resultGeoData?
        //or should I identify the weather data only based on lat and lon?

        //     let nlpEntry = {
    //         model: newData.model,
    //         score_tag: newData.score_tag,
    //         agreement: newData.agreement,
    //         subjectivity: newData.subjectivity,
    //         confidence: newData.confidence,
    //         irony: newData.irony
    //     };
        projectData = {
            ...resultImage,
            ...resultGeoData,
            ...resultWeather
        }
        console.log(projectData);
        res.send(projectData);

    } catch (error) {
        console.log("error", error);
        }
});


// designates what port the app will listen to for incoming requests
const port = 8081;
app.listen(port, () =>
    console.log('Example app listening on ${port}!')
);

app.get('/test', (req, res) => {
    res.send(mockAPIResponse);
});

app.get('/apiData', (req, res) => {
    res.send(apiData);
});