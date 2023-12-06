const form = document.querySelector(".login-form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", onSubmitForm);
function onSubmitForm(e) {
  e.preventDefault();
  let allFieldsFilled = true;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      allFieldsFilled = false;
    }
  });

  if (!allFieldsFilled) {
    alert("All form fields must be filled in");
  }
  const forms = e.target;
  const login = forms.elements.email.value;

  const password = forms.elements.password.value;
  const objectDate = [{ email: login, password: password }];
  console.log(objectDate);
  forms.reset();
}
