function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const desk = document.querySelector("p> .color");

const btn = document.querySelector(".change-color");
btn.addEventListener("click", onRandomColor);
function onRandomColor() {
  const body = document.body;
  body.style.backgroundColor = getRandomHexColor();
  desk.textContent = getRandomHexColor();
}
