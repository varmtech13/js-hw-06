const allItemsRef = document.querySelectorAll("li.item");

console.log(`Number of categories: ${allItemsRef.length}`);

allItemsRef.forEach((item) => {
  const allTitleRef = item.querySelector("h2");
  //console.log(title);
  const allLiRef = item.querySelectorAll("ul li");
  //console.log(list.length);
  console.log(
    `Category: ${allTitleRef.textContent}\r\nElements: ${allLiRef.length}`
  );
});
