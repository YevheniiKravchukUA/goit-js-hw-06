const { input, nameTextArea } = {
  input: document.querySelector("#name-input"),
  nameTextArea: document.querySelector("#name-output"),
};

input.addEventListener("input", (e) => {
  if (input.value !== "") {
    nameTextArea.textContent = input.value;
  } else {
    nameTextArea.textContent = "Anonymous";
  }
});
