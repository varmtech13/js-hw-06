function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

let width = 30;
let height = 30;

function createBoxes(amount) {
  console.log(amount);
  for (let index = 1; index <= amount; index++) {
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div style="background-color: ${getRandomHexColor()}; display: block; width: ${width}px; height: ${height}px;">`
    );

    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
  width = 30;
  height = 30;
}

//create.addEventListener("click", createBoxes(input.value), false);
create.addEventListener("click", function () {
  createBoxes(input.value);
});
destroy.addEventListener("click", destroyBoxes);
