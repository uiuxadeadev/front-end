export async function updateUI(res){
    try {
        document.getElementById('cityName').innerHTML = "";
        document.getElementById('cityImage').src = "";
        document.getElementById('daysLeft').innerHTML = "";
        document.getElementById('weatherDesc').innerHTML = "";
        document.getElementById('maxTemp').innerHTML = "";
        document.getElementById('minTemp').innerHTML = "";
    }
    catch(error) {
        console.log('error', error);
    };
};