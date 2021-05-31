const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listOfIngredients = document.querySelector('#ingredients');

const allIngredients = ingredients.map(ingredient => {
  const ingredientElement = document.createElement('li');
  ingredientElement.textContent = ingredient;
  return ingredientElement;
});

listOfIngredients.append(...allIngredients);


// const listRef = document.getElementById('ingredients');

// const elemArr = [];

// const makeListOfElements = (ingredients) => {
//     return ingredients.map(ingredient => {    
//       const elementRef = document.createElement('li'); 
//       elementRef.textContent = ingredient;
//       elemArr.push(elementRef)
//       listRef.append(...elemArr)
//     });   
// };

// makeListOfElements(ingredients);






