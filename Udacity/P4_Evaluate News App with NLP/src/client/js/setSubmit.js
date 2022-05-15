export function setSubmit(){
    // const form = document.getElementsByTagName('form')[0];
    const form = document.getElementById('form');
    //null return when no form
    if (form === null) {
        alert("no form");
        return;
    };
    // form.addEventListener('submit', function(e) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        Client.postURL();
    });
}