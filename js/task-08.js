const form = document.querySelector("form");
const email = form.elements.email;
const password = form.elements.password;

const data = {
  email,
  password,
};
console.log(form);
form.addEventListener("submit", (event) => {
  console.log(form.elements.email);
  if (email.value === "" || password.value === "") {
    alert("Пожалуйста, заполните все поля!");
  } else {
    event.preventDefault();
    data.email = email.value;
    data.password = password.value;
    form.reset();
  }
  console.log(data);
});
