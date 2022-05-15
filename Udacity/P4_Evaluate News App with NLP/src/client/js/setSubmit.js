export function setSubmit(){
    // const form = document.getElementsByTagName('form')[0];
    const form = document.getElementById('form');
    //null return when no form
    if (form === null) {
        alert("no form");
        return;
    };
    // form.addEventListener('submit', function(e) {
        //awaitを使ったのでasyncを所属先であるfunction(e)に記述
    form.addEventListener('submit', async e => {
        e.preventDefault();

        //postURLの結果をupdateUIに渡す
        const resultInput = await Client.postURL();
        Client.updateUI(resultInput);
    });
}