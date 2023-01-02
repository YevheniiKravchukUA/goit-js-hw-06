const { btnCrt, btnDstr, input, boxes } = {
  btnCrt: document.querySelector("button[data-create]"),
  btnDstr: document.querySelector("button[data-destroy]"),
  input: document.querySelector("input"),
  boxes: document.querySelector("#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 3; i < Number(amount) + 3; i += 1) {
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div style="width: ${i * 10}px; height: ${
        i * 10
      }px; background-color: ${getRandomHexColor()}"></div>`
    );
  }
  input.value = "";
}

function destroyBoxes(evt) {
  boxes.innerHTML = "";
  input.value = "";
}

btnCrt.addEventListener("click", (e) => createBoxes(input.value));
btnDstr.addEventListener("click", (e) => destroyBoxes(e));
