

const api_key = `live_hHCtsCLJtndMuOis97Pz9si1COQaL3rvVkJbNM03kRXvkhWmjsLXymUqgDN1g7Ud`;
 const HHTP_DATA = `https://api.thecatapi.com/v1/breeds`;
const option = {
    headers: {
      'x-api-key': api_key
    },
  }

//* fetch() - 1 - Options

export default function fetchBreeds() {
  return fetch(HHTP_DATA, option)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
}

//* fetch() - 2 - breeds

export function fetchCatByBreed() {
  return fetch("https://api.thecatapi.com/v1/breeds", option)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
}









