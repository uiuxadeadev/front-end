// updateUI(res)

//The res is what the recipient calls it.
// export const updateUI = async (res) => {
export async function updateUI(res){
    try {
        document.getElementById('cityName').innerHTML = `Trip to ${res.city}`;
        document.getElementById('cityImage').src = `${res.img}`;

        let remainingDate = Client.remainingDate(res.startDate);
        document.getElementById('daysLeft').innerHTML = remainingDate;

        document.getElementById('weatherDesc').innerHTML = `weather description: ${res.weather_desc}`;
        document.getElementById('maxTemp').innerHTML = `max temp: ${res.app_max_temp}`;
        document.getElementById('minTemp').innerHTML = `min temp: ${res.app_min_temp}`;
    }
    catch(error) {
        console.log('error', error);
        // Appropriately handle errors
    };
};