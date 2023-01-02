const { form, inputs } = {
  form: document.querySelector(".login-form"),
  inputs: document.querySelectorAll("input"),
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((el, idx) => {
    if (el.value === "") {
      idx === 0
        ? alert("Пожалуйста, заполните поле Email!")
        : alert("Пожалуйста, заполните поле Password!");
    }
  });
});
