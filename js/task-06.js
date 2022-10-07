const inputText = document.getElementById("validation-input");
const length = inputText.getAttribute("data-length");

function checkLength() {
  console.log(inputText, length);
  inputText.value.length >= length
    ? (inputText.className = "valid")
    : (inputText.className = "invalid");
}

inputText.addEventListener("blur", checkLength);
