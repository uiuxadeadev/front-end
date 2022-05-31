const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');

module.exports = async function getGeoData(destination){
    //Call The Geonames Api to get the lat & long data of the destination.
    const baseURl = 'http://api.geonames.org/searchJSON?';
    const username = process.env.GEONAMES_USERNAME;

    try{
        const url = `${baseURl}q=${destination}&maxRows=10&username=${username}`;
    console.log(url + " url ok");
        const destinationData = await fetch(url);
        console.log(destinationData);
    //     const jsonData = await destinationData.json();
    // console.log(jsonData + " jsonData ok");
    const jsonData1 = destinationData.geonames[0];

    // const jsonData1 = destinationData.data.geonames;
    console.log(jsonData1 + " jsonData1 ok");

    //What's this?
        const response = jsonData.geonames[0];
    console.log(response + " response ok");
        //What's this?
        const resultGeoData = response.data.geonames;
        if (resultGeoData == null) {
            return res.status(404).json({ Validation: "please input an invalid city name" });
        }
        return resultGeoData;
        // if(geoData.length != 0){
        //     return{
        //         latitude: geoData[0].lat,
        //         longitude: geoData[0].lng
        //     };
        // }else{
        //     let code = (typeof response.response === 'undefined') ? 400 : response.response.status;
        //     let message = response.data.error || 'Invalid city. Please provide a valid city name!';
        //     return {
        //         code: code ,
        //         message: message
        //     }
        // }

    }catch(err){
        throw new Error(`Error has occured:${err}`);
    }
};