// updateUI(res)

//The res is what the recipient calls it.
// export const updateUI = async (res) => {
export async function updateUI(res){
    try {
        // document.getElementById('cityName').innerHTML = `weather description: ${tripData.city}`;
        document.getElementById('cityName').innerHTML = `Trip to ${res.city}`;

        document.getElementById('cityImage').src = `${res.img}`;

        let remainingDate = Client.remainingDate(res.startDate);
        document.getElementById('daysLeft').innerHTML = remainingDate;

        document.getElementById('weatherDesc').innerHTML = `weather description: ${res.weather_desc}`;
        document.getElementById('maxTemp').innerHTML = `max temp: ${res.app_max_temp}`;
        document.getElementById('minTemp').innerHTML = `min temp: ${res.app_min_temp}`;

        // Write updated data to DOM elements
        // document.getElementById('model').innerHTML = `Model: ${res.model}`;
        // document.getElementById('score_tag').innerHTML = `Score Tag: ${res.score_tag}`;
        // document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
        // document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
        // document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
        // document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
    }
    catch(error) {
        console.log('error', error);
        // Appropriately handle errors
    };
};