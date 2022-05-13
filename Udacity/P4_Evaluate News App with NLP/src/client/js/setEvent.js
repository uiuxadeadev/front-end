export function setEvent(){
    const form = document.querySelector('form');//getElementId のほうが早い
    //formが存在しない場合は、nullが返ってくる
    if (form === null) {
        // 0 == '0' true
        // 0 === '0' false
        return;
    };
    // form.addEventListener('submit', function(e) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        postURl();
    });
}