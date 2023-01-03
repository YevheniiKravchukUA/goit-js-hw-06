const { input } = {
  input: document.querySelector("#validation-input"),
};

input.addEventListener("blur", (e) => {
  if (input.value.length * 1 !== input.dataset.length * 1) {
    input.classList.contains("valid") ? input.classList.remove("valid") : {};
    input.classList.add("invalid");
  } else {
    input.classList.contains("invalid")
      ? input.classList.remove("invalid")
      : {};
    input.classList.add("valid");
  }
});
