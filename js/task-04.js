const valueRef = document.querySelector('#value');
const buttonIncrementRef = document.querySelector('[data-action="increment"]');
const buttonDecrementRef = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

const increment = () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
}

const decrement = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}


buttonIncrementRef.addEventListener('click', increment);
buttonDecrementRef.addEventListener('click', decrement);

console.log(counterValue);