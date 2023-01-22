const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elUl = document.querySelector('ul#ingredients');  

const elLiMarkup = item => {

  const elLi = document.createElement("li");

  elLi.textContent = item;
  elLi.classList.add("item");
  console.log(elLi); 
  return elLi;  
 
}
//  const elUlMarkup = ingredients.forEach(elLiMarkup);
// const elUlMarkup = ingredients.forEach(function (item) {
//     const elLi = document.createElement("li");
//     elLi.textContent = item;
//   elLi.classList.add("item");
//   console.log(elLi); 
//   return elLi;  
// });


const elUlMarkup = ingredients
 .map(elLiMarkup)
  .join(''); 
   console.log(elUlMarkup); 



elUl.insertAdjacentHTML('beforeend', elUlMarkup); 
 


