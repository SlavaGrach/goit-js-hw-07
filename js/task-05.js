const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

console.log(outputNameRef);

inputNameRef.addEventListener('input', event => {
    if (event.currentTarget.value === '') {
        return outputNameRef.textContent = 'незнакомец'
    }
    return outputNameRef.textContent = event.currentTarget.value;
    
});

