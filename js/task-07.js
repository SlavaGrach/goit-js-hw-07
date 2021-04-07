const inputBarRef = document.querySelector('#font-size-control');
const spanTexRef = document.querySelector('#text');

inputBarRef.addEventListener('input', event => {
    spanTexRef.setAttribute('style', `font-size: ${inputBarRef.value}px`);
});
