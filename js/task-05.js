const inputText = document.getElementById("name-input");
const spanText = document.getElementById("name-output");

function addText() {
  console.log(inputText.value);
  if (inputText.value.length > 0) {
    spanText.textContent = inputText.value;
  } else {
    spanText.textContent = "Anonymous";
  }
}

inputText.addEventListener("input", addText);
