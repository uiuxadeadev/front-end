export function remove(){
    const remove = document.getElementById('remove');

    remove.addEventListener('click', (e) => {
        e.preventDefault();
alert("alert ok");
        document.getElementById('cityName').innerHTML = "";
        document.getElementById('cityImage').src = "";
        document.getElementById('daysLeft').innerHTML = "";
        document.getElementById('weatherDesc').innerHTML = "";
        document.getElementById('maxTemp').innerHTML = "";
        document.getElementById('minTemp').innerHTML = "";
    });
};