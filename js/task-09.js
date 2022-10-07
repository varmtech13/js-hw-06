function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputColor = document.getElementsByClassName("change-color");
console.log(inputColor);
const body = document.getElementsByTagName("body");
const span = document.getElementsByClassName("color");
inputColor[0].addEventListener("click", (event) => {
  body[0].style.backgroundColor = getRandomHexColor();
  span[0].textContent = getRandomHexColor();
});
