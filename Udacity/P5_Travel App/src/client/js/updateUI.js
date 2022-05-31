// updateUI(res)

//The res is what the recipient calls it.
// export const updateUI = async (res) => {
export async function updateUI(res){
    try {
        console.log(res.hits[0].largeImageURL);
        res.photoUrl = res.hits[0].largeImageURL;
        // res.photoUrl = res.resultImage.hits[0].largeImageURL;
        document.getElementById('cityImage').src = res.photoUrl;

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