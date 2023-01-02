const { input, text } = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

input.addEventListener("input", (e) => {
  return (text.style.fontSize = `${input.value}px`);
});
