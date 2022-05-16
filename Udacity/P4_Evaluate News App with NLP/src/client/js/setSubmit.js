export function setSubmit(){
    // const form = document.getElementsByTagName('form')[0];
    const form = document.getElementById('form');
    //null return when no form
    if (form === null) {
        alert("no form");
        return;
    };
    // form.addEventListener('submit', async function(e) {
        //async and await
    form.addEventListener('submit', async e => {
        e.preventDefault();
        const validatedInput = await Client.validateURL();
        if (validatedInput === false){
            return;
        }

        const resultInput = await Client.postURL();
        Client.updateUI(resultInput);
    });
}