const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');

module.exports = async function getGeoData(destination){
    //Call The Geonames Api to get the lat & long data of the destination.
    const baseURl = 'http://api.geonames.org/searchJSON?';
    const username = process.env.GEONAMES_USERNAME;

    try{
        const url = `${baseURl}q=${destination}&maxRows=10&username=${username}`;
        const response = await fetch(url);
        const jsonData = await response.json();

        if (jsonData == null || jsonData == undefined) {
            let code = (typeof jsonData.response === 'undefined') ? 400 : jsonData.response.status;
            let message = jsonData.data.error || 'Invalid city. Please provide a valid city name!';
            return {
                code: code ,
                message: message
            }
        }

        return {
            lat: jsonData.geonames[0].lat,
            lng: jsonData.geonames[0].lng
        };

    }catch(err){
        throw new Error(`Error has occured:${err}`);
    }
};