export function setSubmit(){
    const form = document.getElementsByTagName('form');
    //null return when no form
    if (form === null) {
        alert("no form");
        return;
    };
    // form.addEventListener('submit', function(e) {
    form.addEventListener('submit', e => {
        alert("I EXIST before e.prevent");
        e.preventDefault();
        alert("I EXIST");
        console.log("I EXIST");
        postURl();
    });
}