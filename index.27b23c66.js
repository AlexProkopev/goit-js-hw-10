!function(){function e(e){return fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_hHCtsCLJtndMuOis97Pz9si1COQaL3rvVkJbNM03kRXvkhWmjsLXymUqgDN1g7Ud",id:e}}).then((function(e){return e.json()}))}var n=document.querySelector(".container"),t=document.querySelector(".cat-info"),i=document.querySelector(".loader"),c=document.querySelector(".error");function s(e){return e.filter((function(e){return e.id===n.elements.select.value}))}n.addEventListener("submit",(function(a){a.preventDefault(),n.classList.add("is-hidden"),i.classList.remove("is-hidden"),c.classList.add("is-hidden"),e(n.elements.select.value).then((function(e){var c,a;i.classList.add("is-hidden"),n.classList.remove("is-hidden"),s(e),c=s(e),a='\n    <h1 class="title-cat">'.concat(c[0].name,'</h1>\n    <img src="').concat(c[0].image.url,'" class="img-adaptation">\n    <p class="description-text">').concat(c[0].description,"</p>\n    "),t.innerHTML=a})).catch((function(){i.classList.add("is-hidden"),c.classList.remove("is-hidden")}))}));var a=document.querySelector(".breed-select");e().then((function(e){!function(e){var n=e.map((function(e){var n=e.id,t=e.name;return'\n    <option value="'.concat(n,'">').concat(t,"</option>\n    ")})).join(" ");a.insertAdjacentHTML("beforeend",n)}(e)}))}();
//# sourceMappingURL=index.27b23c66.js.map
