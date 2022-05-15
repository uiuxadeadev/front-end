export async function postURL() {
    // check what text was put into the form field
    let formText = document.getElementById('text').value;
    // const postData = async ( url = '', data = {})=>{
        console.log(formText);
        const dataObj = {inputText: formText};
        console.log(dataObj);
        const response = await fetch('http://localhost:8081/addData', {
        // const response = await fetch('/addData', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
         // Body data type must match "Content-Type" header
         //JSONはkeyとvalueで管理する必要がある。
        body: JSON.stringify(dataObj)
        // body: JSON.stringify({inputURL: formText})
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