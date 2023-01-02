const { body, text, button } = {
  body: document.querySelector("body"),
  text: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", (e) => {
  text.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
});
