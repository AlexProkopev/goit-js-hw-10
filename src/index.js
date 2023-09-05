import fetchCatByBreed from './cat-api.js';

const formRef = document.querySelector('.container');
const cat_info = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

function searchData(e) {
  e.preventDefault();
  formRef.classList.add('is-hidden');
  loader.classList.remove('is-hidden');
  error.classList.add('is-hidden');

  fetchCatByBreed(formRef.elements.select.value)
    .then(data => {
      loader.classList.add('is-hidden');
      formRef.classList.remove('is-hidden');

      searchBreadr(data);
      renderList(searchBreadr(data));
    })
    .catch(() => {
      loader.classList.add('is-hidden');
      error.classList.remove('is-hidden');
    });
}

formRef.addEventListener('submit', searchData);

function searchBreadr(array) {
  const myObj = array.filter(el => el.id === formRef.elements.select.value);
  return myObj;
}

function renderList(array) {
  const elementList = `
    <h1 class="title-cat">${array[0].name}</h1>
    <img src="${array[0].image.url}" class="img-adaptation">
    <p class="description-text">${array[0].description}</p>
    `;

  cat_info.innerHTML = elementList;
}
