const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.getElementById('ingredients');

const elemArr = [];

const makeListOfElements = (ingredients) => {
    return ingredients.map(ingredient => {    
      const elementRef = document.createElement('li'); 
      elementRef.textContent = ingredient;
      elemArr.push(elementRef)
      listRef.append(...elemArr)
    });   
};

makeListOfElements(ingredients);






