import fetchBreeds from './cat-api';
import { fetchCatByBreed } from './cat-api';
import { ELEMENTS_REFS } from './refs-obj';
import { renderList } from './render-list';
import { searchBreadr } from './search-breadr';
import Notiflix from 'notiflix';



//* Рендер опций в Select
function renderOptions() {
  notification();

  fetchBreeds()
    .then(data => {
      loaderAndForm();
      renderListBreads(data);
    })
    .catch(() => {
      ELEMENTS_REFS.form.classList.add('is-hidden');
      handleError()
    })
}

renderOptions(); // По умолчанию вызываем функцию что бы зарендерила опции - в случае ошибки будет уведомление об ней

function renderListBreads(data) {
  const renderListOptions = data
    .map(
      ({ id, name }) =>
        `
    <option value="${id}">${name}</option>
    `
    )
    .join(' ');

  ELEMENTS_REFS.breedSelect.insertAdjacentHTML('beforeend', renderListOptions);
}

//* Получение обьеkта по ID

document.querySelector('.container').addEventListener('change', renderBySelect);

function renderBySelect(e) {
  notification();
  const curentValue = e.currentTarget.elements.select.value;

  fetchCatByBreed()
    .then(data => {
      loaderAndForm();
      renderList(searchBreadr(data, curentValue));
    })
    .catch(() => {
      
      handleError()
      ELEMENTS_REFS.form.classList.remove('is-hidden');
    });
}

//* Уведомления
function notification() {
  ELEMENTS_REFS.loader.classList.remove('is-hidden');
  ELEMENTS_REFS.error.classList.add('is-hidden');
  ELEMENTS_REFS.form.classList.add('is-hidden');
  
  
}

function loaderAndForm() {
  ELEMENTS_REFS.loader.classList.add('is-hidden');
  ELEMENTS_REFS.form.classList.remove('is-hidden');
  
}

function handleError() {
  ELEMENTS_REFS.loader.classList.add('is-hidden');
  Notiflix.Notify.failure('Произошла внезапная ошибка,попробуйте снова');
}