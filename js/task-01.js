const Refs = {
  list: document.querySelector("#categories"),
  items: document.querySelectorAll(".item"),
};

console.log(document.title);
console.log(`Number of categories: ${Refs.items.length}`);
console.log(`*****************`);
Refs.items.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.childElementCount}`);
  console.log(`*****************`);
});
