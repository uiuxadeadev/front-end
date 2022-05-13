export async function postURL(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    if (Client.checkForName(formText)){
        console.log("::: Form Submittedaaaa :::");
        postData('/addData', {url: formText}) //why "url" was used?
        .then(res => {
            res.json()
        })
        .then(function(res) {
            updateUI(res)
        })
    } else {
        alert('Submission Failed')
    };

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
}
