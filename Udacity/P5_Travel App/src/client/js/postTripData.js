export async function postTripData(dataObj) {

    const response = await fetch('http://localhost:8081/addTrip', {
    // const response = await fetch('/addData', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
        // Body data type must match "Content-Type" header
    body: JSON.stringify(dataObj)
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
        console.log("error", error);
    }
// }
}