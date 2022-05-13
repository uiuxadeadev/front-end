export function validateURL(url){
    const rgx = /^(http(s)?:\/\/)/g;
    const validate = rgx.test(url);
    if(url === ''){
        alert('Please input an URL!');
        return false;
    }
    if(validate === false){
        alert('Please input an URL starting from http:// or https://');
        return false;
    }
    return true;
}