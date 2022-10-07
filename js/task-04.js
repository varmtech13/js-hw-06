let counterValue = 0;

const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
const value = document.getElementById("value");
console.log(value);

let counter = 0;

function incrementFunc() {
  counter += 1;
  value.textContent = counter;
  console.log(value);
}

function decrementFunc() {
  counter -= 1;
  value.textContent = counter;
  console.log(value);
}

increment.addEventListener("click", incrementFunc);
decrement.addEventListener("click", decrementFunc);
