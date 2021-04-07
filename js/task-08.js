const controlsRef = document.querySelector('#controls');
const inputNumberRef = document.querySelector('#number');
const buttonRender = document.querySelector('[data-action="render"]');
const buttonDestroyRef = document.querySelector('[data-action="destroy"]');
const divBoxesRef = document.querySelector('#boxes');

const createBoxes = (amount) => {

    for (let index = 1; index <= amount; index++) {
        const divEl = document.createElement('div');
        divEl.style.backgroundColor = 'rgb(0, 191, 255)';
        divEl.style.height = '30px';
        divEl.style.width = '30px';
        console.log(divEl);
        divBoxesRef.appendChild(divEl);
        
    }

    // const divEl = document.createElement('div');
    // divEl.style.backgroundColor = 'rgb(0, 191, 255)';
    // divEl.style.height = '30px';
    // divEl.style.width = '30px';
    // console.log(divEl);
    // divBoxesRef.appendChild(divEl);

};

const destroyBoxes = () => {

};

createBoxes(5);


