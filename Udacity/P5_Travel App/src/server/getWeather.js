const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');

module.exports = async function getWeather(resultGeoData){
    //Call The Geonames Api to get the lat & long data of the destination.
    //https://www.weatherbit.io/api/weather-forecast-16-day
    const baseURl = 'https://api.weatherbit.io/v2.0/forecast/daily?';
    const weatherAPI = process.env.WEATHERBIT_APIKEY;
    const url = `${baseURl}key=city=${city}&lat=${resultGeoData.latitude}&lon=${resultGeoData.longitude}&key=${weatherAPI}`;

    try{
        const weatherData = await fetch(url);
        const jsonData = await weatherData.json();
        const tripStartDate = req.body.value.tripStartDate;
        const resultWeather = jsonData.data[tripStartDate];

        return {
            temp: resultWeather.temp, // Average Temperature (default Celcius)
            // Apparent/"Feels Like" temperature at max_temp time (default Celcius)
            app_max_temp: resultWeather.app_max_temp,
            // Apparent/"Feels Like" temperature at min_temp time (default Celcius)
            app_min_temp: resultWeather.app_min_temp,
            weather_desc: resultWeather.weather.description,
        }

    }catch(err){
        throw new Error(`Error has occured:${err}`);
    }
};