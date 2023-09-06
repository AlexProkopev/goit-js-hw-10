
import { renderList } from "./render-list";
import { searchBreadr } from "./search-breadr";
import { ELEMENTS_REFS } from "./refs-obj";
console.log(ELEMENTS_REFS);

export default function fetchBreeds() {
  const url = `https://api.thecatapi.com/v1/breeds`;
  const api_key = `live_hHCtsCLJtndMuOis97Pz9si1COQaL3rvVkJbNM03kRXvkhWmjsLXymUqgDN1g7Ud`;
  return fetch(url, {
    headers: {
      'x-api-key': api_key
    },
  }).then(response => {
    return response.json();
  });
}


export function fetchCatByBreed(breedId) {
 
  ELEMENTS_REFS.loader.classList.remove("is-hidden")
  ELEMENTS_REFS.error.classList.add('is-hidden');
  ELEMENTS_REFS.form.classList.add('is-hidden');


 const api_key = `live_hHCtsCLJtndMuOis97Pz9si1COQaL3rvVkJbNM03kRXvkhWmjsLXymUqgDN1g7Ud`;
  const HHTP_DATA = `https://api.thecatapi.com/v1/breeds`;

  fetch(HHTP_DATA, {
    headers: {
      "x-api-key": api_key,
      breed_ids: breedId,
    },
  })
    .then(responsiv => responsiv.json())
    .then(data => {
      ELEMENTS_REFS.loader.classList.add('is-hidden');
      ELEMENTS_REFS.form.classList.remove('is-hidden');
      renderList(searchBreadr(data))
    })
    .catch(() => {
      ELEMENTS_REFS.loader.classList.add('is-hidden');
      ELEMENTS_REFS.error.classList.remove('is-hidden');
    });

}







