function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorInSpan = document.querySelector(".color");
const bodyEl = document.querySelector("body");

changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorInSpan.textContent = randomColor;
});