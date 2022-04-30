/* Global Variables */
    // API https://openweathermap.org/current#zip
    // Examples of API calls
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip='
    //https://openweathermap.org/current#data
    //For temperature in Fahrenheit use units=imperial
    //For temperature in Celsius use units=metric
    const apiKey = ',us&APPID=<YOUR_API_key>&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = ( d.getMonth() + 1 )+'.'+ d.getDate()+'.'+ d.getFullYear();


document.getElementById('generate').addEventListener('click', performAction);

function performAction(){
    const feelings = document.getElementById('feelings').value;
    const zipCode = document.getElementById('zip').value;
    // San Francisco, CA	zipcode: 94101
    const newURL= baseURL+zipCode+apiKey;

    if (feelings == false) {
        alert("feelings is empty");
        return;
    };
    // http://zparacha.com/validate-zip-code-using-javascript-regular-expression
    // https://www.javascript-coder.com/form-validation/javascript-zip-code-validation/
    function validateZipCode(elementValue){
        var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
        return zipCodePattern.test(elementValue);
    }

    if (!zipCode){
        alert("zip code is empty");
        return;
    } else {
        if (validateZipCode(zipCode)) {
            // getData(baseURL , zipCode , apiKey )
            getData(newURL)
            .then (function(data) {
                postData('/addData', {temp:data.main.temp, date:newDate, content:feelings});
            }).then(()=>
                updateUI()
            )} else {
                alert("zip code is invalid");
                return;
            };
    }
};
// const getData = async (baseURL, zipCode, apiKey)=>{
//     const res = await fetch(baseURL + zipCode + apiKey)
const getData = async (url)=>{
    const res = await fetch(url)
    try {

    const data = await res.json();
        console.log(data)
        return data;
    }  catch(error) {
        console.log("error", error);
        // appropriately handle the error
    }
    }


const postData = async ( url = '', data = {})=>{
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
     // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
        // alert("no zip code", error);
        console.log("error", error);
    }
}

const updateUI = async () =>{
    const request = await fetch('/all');
    try {
    // Transform into JSON
    const allData = await request.json();
    document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
    document.getElementById('content').innerHTML = allData.feelings;
    document.getElementById("date").innerHTML =allData.date;
    }
    catch(error) {
        console.log("error", error);
      // appropriately handle the error
    }
}