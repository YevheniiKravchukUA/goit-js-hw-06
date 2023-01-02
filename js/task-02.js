const { list } = {
  list: document.querySelector("#ingredients"),
};

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elementsArr = ingredients.map((e) => {
  const elem = document.createElement("li");
  elem.classList.add("item");
  elem.textContent = e;

  return elem;
});

list.append(...elementsArr);
