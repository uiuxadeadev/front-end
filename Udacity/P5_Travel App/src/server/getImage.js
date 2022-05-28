const dotenv = require('dotenv');
dotenv.config();

export async function getImage(destination){
    //Call The Geonames Api to get the lat & long data of the destination.
    const baseURl = 'https://pixabay.com/api/?';
    const pixabayAPI = process.env.PIXABAY_APIKEY;

    try{
        const url = `${baseURl}key=${pixabayAPI}&q=${destination}&category=places&orientation=horizontal&image_type=photo`;
        const imageData = await fetch(url);
        const resultImage = await imageData.json();
        return resultImage;
        // const imageData = image.data.hits[0] || '';
        // return {
        //    img: imageData.webformatURL || ''
        // }

        // const jsonData = await destinationData.json();
        // const response = jsonData.geonames[0];

        // const resultGeoData = response.data.geonames;
        // if (resultGeoData == null) {
        //     return res.status(404).json({ Validation: "please input invalid city name" });
        // }
        // return resultGeoData

    }catch(err){
        throw new Error(`Error has occured:${err}`);
    }
};