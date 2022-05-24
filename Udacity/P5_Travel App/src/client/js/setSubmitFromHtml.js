export async function setSubmitFromHtml(e){
    e.preventDefault();
        let inputText = document.getElementById('text').value;
        alert(inputText);
        const validatedInput = await Client.validateURL(inputText);
        if (validatedInput === false){
            return;
        }

        const resultInput = await Client.postURL();
        Client.updateUI(resultInput);
};