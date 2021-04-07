const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulIngridientsRef = document.querySelector('#ingredients');

const elements = ingredients.map(ingridient => {
    const liEl = document.createElement('li');
    liEl.textContent = ingridient;

    return liEl;
});

ulIngridientsRef.append(...elements);
