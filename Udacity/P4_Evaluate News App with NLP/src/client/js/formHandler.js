function handleSubmit(event) {
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
// updateUI(res)

const updateUI = async (res) => {
    try {
        // Write updated data to DOM elements
        document.getElementById('model').innerHTML = `Model: ${res.model}`;
        document.getElementById('score_tag').innerHTML = `Score Tag: ${res.score_tag}`;
        document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
    }
    catch(error) {
        console.log('error', error);
        // Appropriately handle errors
    };
};


export { handleSubmit }
