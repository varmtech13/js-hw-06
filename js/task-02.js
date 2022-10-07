const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const li = ingredients.map((element) => {
  const item = document.createElement("li");
  item.className = "item";
  item.innerHTML = element;
  return item;
});
document.getElementById("ingredients").append(...li);
