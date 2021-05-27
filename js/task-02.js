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
    return ingredients.forEach(ingredient => {    
        const elementRef = document.createElement('li'); 
        elementRef.textContent = ingredient;
        listRef.append(elementRef)
    });
};


makeListOfElements(ingredients);






