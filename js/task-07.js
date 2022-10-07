const inputText = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

inputText.addEventListener("input", (event) => {
  spanText.style.fontSize = inputText.value + "px";
});
