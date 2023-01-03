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

  return (
    console.log({
      login: inputs[0].value,
      password: inputs[1].value,
    }),
    (inputs[0].value = ""),
    (inputs[1].value = "")
  );
});
