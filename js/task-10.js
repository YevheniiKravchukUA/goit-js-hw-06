// Variables

let counter = 0;
let elemSize = 30;

//  Refs

const { btnCrt, btnDstr, input, boxes } = {
  btnCrt: document.querySelector("button[data-create]"),
  btnDstr: document.querySelector("button[data-destroy]"),
  input: document.querySelector("input"),
  boxes: document.querySelector("#boxes"),
};

// Events

btnCrt.addEventListener("click", (e) => createBoxes(input.value));
btnDstr.addEventListener("click", (e) => destroyBoxes(e));

// Functions

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Event Functions

function createBoxes(amount) {
  counter = 0;

  do {
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div style="width: ${elemSize}px; height: ${elemSize}px; background-color: ${getRandomHexColor()}"></div>`
    );
    elemSize += 10;
    counter += 1;
  } while (counter < amount);
}

function destroyBoxes(evt) {
  boxes.innerHTML = "";
  counter = 0;
  elemSize = 30;
}
