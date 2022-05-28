const dotenv = require('dotenv');
dotenv.config();

export async function getGeoData(destination){
    //Call The Geonames Api to get the lat & long data of the destination.
    const baseURl = 'http://api.geonames.org/searchJSON?';
    const username = process.env.GEONAMES_USERNAME;

    try{
        const url = `${baseURl}q=${destination}&maxRows=1&username=${username}`;
        const destinationData = await fetch(url);
        const jsonData = await destinationData.json();
        const response = jsonData.geonames[0];

        const resultGeoData = response.data.geonames;
        if (resultGeoData == null) {
            return res.status(404).json({ Validation: "please input invalid city name" });
        }
        return resultGeoData
        // if(geoData.length != 0){
        //     return{
        //         lat: geoData[0].lat,
        //         lon: geoData[0].lng
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