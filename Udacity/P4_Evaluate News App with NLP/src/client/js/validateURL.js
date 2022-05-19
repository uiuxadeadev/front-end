export function validateURL(inputText){
    // let inputText = document.getElementById('text').value;
    const rgx = /^(http(s)?:\/\/)/g;
    const validate = rgx.test(inputText);
    if(inputText === ''){
        alert('Please input an URL!');
        return false;
    }
    if(validate === false){
        alert('Please input an URL starting from http:// or https://');
        return false;
    }
    alert('URL is validated');
    return true;
}