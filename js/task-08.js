const { form, inputs, emailInput, passInput } = {
  form: document.querySelector(".login-form"),
  emailInput: document.querySelector("input[name='email']"),
  passInput: document.querySelector("input[name='password']"),
  inputs: document.querySelectorAll("input"),
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!Boolean(emailInput.value) && !Boolean(passInput.value)) {
    alert("Please, enter your Email and Password!");
  } else if (!Boolean(emailInput.value)) {
    return alert("Please, enter your Email!");
  } else if (!Boolean(passInput.value)) {
    return alert("Please, enter your Password!");
  } else {
    console.log({
      email: emailInput.value,
      password: passInput.value,
    });

    emailInput.value = "";
    passInput.value = "";
  }
});
