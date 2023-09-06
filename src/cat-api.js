
import { renderList } from "./render-list";
import { searchBreadr } from "./search-breadr";

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
  const loader = document.querySelector(".loader")
  const error = document.querySelector(".error")


  loader.classList.remove("is-hidden")
  error.classList.add('is-hidden');

 const api_key = `live_hHCtsCLJtndMuOis97Pz9si1COQaL3rvVkJbNM03kRXvkhWmjsLXymUqgDN1g7Ud`;
  const HHTP_DATA = `https://api.thecatapi.com/v1/breeds`;

  fetch(HHTP_DATA, {
    headers: {
      "x-api-key": api_key,
      breed_ids: breedId,
    },
  })
    .then(responsiv => {
      return responsiv.json();
    })
    .then(data => {
      loader.classList.add('is-hidden');
      renderList(searchBreadr(data))
    })
    .catch(() => {
      loader.classList.add('is-hidden');
      error.classList.remove('is-hidden');
    });

}







