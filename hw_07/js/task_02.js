'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// function createLiItem(ingredients) {
//   ingredients.forEach((ingredient, idx) => {
//     let heading = document.createElement('li');
//     heading.textContent = ingredient;
//     document.querySelector('#ingredients').append(heading);
//   });
// };

// createLiItem(ingredients);


function createLiItem(ingredients) {
  const ingredientsListItems = document.createDocumentFragment();
  ingredients.forEach((ingredient, idx) => {
    let heading = document.createElement('li');
    heading.textContent = ingredient;
    ingredientsListItems.appendChild(heading);
  });
  return document.querySelector('#ingredients').appendChild(ingredientsListItems);
};

createLiItem(ingredients);