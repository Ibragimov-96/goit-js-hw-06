const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')
const potatoes = document.createElement('li')
potatoes.textContent = 'Potatoes'
potatoes.classList.add('item')
list.append(potatoes)

const mushrooms = document.createElement('li')
mushrooms.textContent = 'Mushrooms'
mushrooms.classList.add('item')
list.append(mushrooms)

const garlic = document.createElement('li')
garlic.textContent = 'Garlic'
garlic.classList.add('item')
list.append(garlic)

const tomatos = document.createElement('li')
tomatos.textContent = 'Tomatos'
tomatos.classList.add('item')
list.append(tomatos)

const herbs = document.createElement('li')
herbs.textContent = 'Herbs'
herbs.classList.add('item')
list.append(herbs)

const condiments = document.createElement('li')
condiments.textContent = 'Condiments'
condiments.classList.add('item')
list.append(condiments)

console.log(list)