import fetchBreeds from './cat-api';
import { fetchCatByBreed } from './cat-api';


//* Рендер опций в Select
fetchBreeds().then(data => renderListBreads(data));

function renderListBreads(data) {
  const bread_select_ref = document.querySelector('.breed-select');
  const renderListOptions = data
    .map(({ id, name }) => {
      return `
    <option value="${id}">${name}</option>
    `;
    })
    .join(' ');

  bread_select_ref.insertAdjacentHTML('beforeend', renderListOptions);
}

//* Получение обьеkта по ID

document.querySelector(".container").addEventListener('change', (e) => {
    fetchCatByBreed(e.currentTarget.elements.select.value)
});





