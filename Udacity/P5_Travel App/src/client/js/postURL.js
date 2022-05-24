export async function postURL() {
    // check what text was put into the form field
    let inputText = document.getElementById('text').value;
    //JSON must be managed by key and value.
    const dataObj = {inputText: inputText};
    const response = await fetch('http://localhost:8081/addData', {
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