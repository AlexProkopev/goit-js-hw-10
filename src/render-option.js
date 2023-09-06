
const bread_select_ref = document.querySelector(".breed-select")

export default function renderListBreads(data) {
  const renderListOptions = data.map(({ id, name }) => {
    return `
    <option value="${id}">${name}</option>
    `
  }).join(" ")
  
  bread_select_ref.insertAdjacentHTML("beforeend", renderListOptions)
}
