const form = document.querySelector(".login-form");
const inputs = form.elements; // Використовуємо властивість elements для отримання всіх елементів форми

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  const formData = {
    email: e.target.elements.email.value.trim(), // Зберігаємо обрізане значення поля email
    password: e.target.elements.password.value.trim(), // Зберігаємо обрізане значення поля password
  };

  console.log(formData); // Виводимо об'єкт з правильною структурою даних в консоль

  form.reset();
}
