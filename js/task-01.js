const itemListRef = document.querySelectorAll('.item');
const titleRef = document.querySelector('h2');

console.log(`В списке ${itemListRef.length} категории.`);

itemListRef.forEach(item =>
    console.log(`
    - Категория: ${item.querySelector('h2').textContent}
    - Количество элементов: ${item.querySelectorAll('li').length} `),
);