function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.getElementById("boxes");

function createBoxes() {
  const amountInput = input.value;

  // Перевірка чи ввід користувача є числом
  const amount = parseInt(amountInput);
  if (isNaN(amount)) {
    alert("Будь ласка, введіть число");
    return;
  }

  destroyBoxes(); // Очистити попередні коробки

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.height = `${size}px`;
    box.style.width = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxes.appendChild(box);
  }

  input.value = ""; // Очистити поле вводу після створення коробок
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
