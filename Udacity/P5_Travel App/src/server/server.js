//define library
const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const app = require('./express');
const cors = require('cors');
const fetch = require('node-fetch');

const getImage = require('./getImage');
const getGeoData = require('./getGeoData');
const getWeather = require('./getWeather');


// cors is needed to allow requests from another server
app.use(cors({
    origin: 'http://localhost:8080'
}))

console.log(__dirname);

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

        projectData = {
            ...req.body,
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
    console.log(`Example app listening on ${port}!`)
);

// app.get('/test', (req, res) => {
//     res.send(mockAPIResponse);
// });

app.get('/apiData', (req, res) => {
    res.send(apiData);
});