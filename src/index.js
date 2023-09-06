import fetchBreeds from './cat-api';
import { fetchCatByBreed } from './cat-api';
import { ELEMENTS_REFS } from "./refs-obj";


//* Рендер опций в Select
fetchBreeds().then(data => renderListBreads(data));

function renderListBreads(data) {
  const renderListOptions = data
    .map(({ id, name }) => 
    `
    <option value="${id}">${name}</option>
    `)
    .join(' ');

  ELEMENTS_REFS.breedSelect.insertAdjacentHTML('beforeend', renderListOptions);
}

//* Получение обьеkта по ID

document.querySelector(".container").addEventListener('change', (e) => {
    fetchCatByBreed(e.currentTarget.elements.select.value)
});





