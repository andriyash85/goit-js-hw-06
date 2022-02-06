const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulRef = document.querySelector('#ingredients');
const arrLi = ingredients.map((elem) => {
const liRef = document.createElement('li');

liRef.classList.add("item");
  liRef.textContent = elem;
  return liRef;
});
ulRef.append(...arrLi);
console.log(ulRef);
