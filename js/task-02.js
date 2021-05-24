const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.getElementById('ingredients');

const makeListOfElements = (ingredients) => {
    return ingredients.forEach(ingredient => {    // при переборе на каждой итерации:
        const elementRef = document.createElement('li'); // создаем элемент списка;
        elementRef.textContent = ingredient; // присуждаем значение каждого элемента массива пункту списка;
        listRef.appendChild(elementRef); // "заливаем" элементы в список
    });
};

makeListOfElements(ingredients);






