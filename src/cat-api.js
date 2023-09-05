

export default function fetchCatByBreed(breedID) {
    const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = `live_hHCtsCLJtndMuOis97Pz9si1COQaL3rvVkJbNM03kRXvkhWmjsLXymUqgDN1g7Ud`; 
  return  fetch(url, {headers: {
      'x-api-key': api_key,
      "id": breedID
 }})
    .then(response => {
      return response.json();
    })
}