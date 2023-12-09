const inputName = document.getElementById("name-input");
let title = document.querySelector("h1> span");
inputName.addEventListener("input", onSearchInput);

function onSearchInput(e) {
  const value = e.target.value.trim();
  title.textContent = value;
  title.textContent = value === "" ? "Anonymous" : value;
}
