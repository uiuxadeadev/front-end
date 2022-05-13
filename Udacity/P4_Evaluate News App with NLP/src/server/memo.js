///dlorenzocodes improvements urlValidation.js /
export function validateURL(url){
    const rgx = /^(http(s)?:\/\/)/g;
    const validate = rgx.test(url);
    if(url === ''){
        alert('Field cannot be empty. Please enter an URl!');
        return false;
    }

    if(validate === false){
        alert('Invalid URl. URl must start with http:// or https://. Please enter a vaild URl!');
        return false;
    }

    return true;
}


///dlorenzocodes improvements index.js /
export function setEvent(){
    const form = document.querySelector('form');

    if (form) {
        // form.addEventListener('submit', function(e) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            postURl();
        });
    };
}

//dlorenzocodes  formHandler.js
// 12
if(!validation) {
    return;
}