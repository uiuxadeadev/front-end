export function setSubmit(){
    // const form = document.getElementsByTagName('form')[0];
    const form = document.getElementById('form');
    //null return when no form
    if (form === null) {
        alert("no form");
        return;
    };
    //async and await
    // form.addEventListener('submit', async function(e) {
    // No need to name them because they won't be reused. So use arrow function
    form.addEventListener('submit', async e => {
        e.preventDefault();
        let inputText = document.getElementById('text').value;
        const validatedInput = await Client.validateURL(inputText);
        if (validatedInput === false){
            return;
        }

        const resultInput = await Client.postURL();
        Client.updateUI(resultInput);
    });
}