const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
    'Приправы',
];

const createIngridientCard = ingredient  => { 
 
    
    const ingridientListref = document.createElement('li')
    ingridientListref.textContent = ingredient;
      return ingridientListref;
}

ingredients.forEach(ingredient => { 
    console.log(createIngridientCard(ingredient))
})

const ingridientsCards = ingredients.map(ingredient => createIngridientCard(ingredient));
console.log(ingridientsCards)
const productListRef = document.querySelector('#ingredients');
console.log(ingridientsCards)
productListRef.append(...ingridientsCards);














