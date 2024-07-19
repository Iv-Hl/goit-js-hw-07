function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector(".control-input");
const createBtn = controls.querySelector("button[data-create]");
const destroyBtn = controls.querySelector("button[data-destroy]");
const boxContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ""; 
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); 
  const elements = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
    size += 10;
  }
  boxContainer.append(...elements);
}

function destroyBoxes() {
  boxContainer.innerHTML = "";
}
