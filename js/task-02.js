const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elLiMarkup = item => {

  const elLi = document.createElement("li");
  elLi.textContent = item;
  elLi.classList.add("item");
  return elLi;
}

const elUlMarkup = ingredients.map(elLiMarkup);

document.querySelector('ul#ingredients').append(...elUlMarkup);









