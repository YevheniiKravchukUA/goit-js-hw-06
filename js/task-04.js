const { counter, value, buttonIncr, buttonDecr } = {
  counter: document.querySelector("#counter"),
  value: document.querySelector("#value"),
  buttonIncr: document.querySelector("button[data-action='increment']"),
  buttonDecr: document.querySelector("button[data-action='decrement']"),
};

let counterValue = 0;

buttonIncr.addEventListener("click", (e) => {
  counterValue += 1;
  value.textContent = counterValue;
});
buttonDecr.addEventListener("click", (e) => {
  counterValue -= 1;
  value.textContent = counterValue;
});
