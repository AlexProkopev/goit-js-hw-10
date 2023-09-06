export function searchBreadr(array) {
  const formRef = document.querySelector(".container")
  const myObj = array.filter(el => el.id === formRef.elements.select.value);
  console.log(myObj);
  return myObj;
}