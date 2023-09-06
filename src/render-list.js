
export function renderList(array) {
  const cat_info = document.querySelector('.cat-info');
  const elementList = `
    <h1 class="title-cat">${array[0].name}</h1>
    <img src="${array[0].image.url}" class="img-adaptation">
    <p class="description-text">${array[0].description}</p>
    `;

  cat_info.innerHTML = elementList;
}