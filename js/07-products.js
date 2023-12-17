const products = [
  {
    name: "Сервоприводи",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
    price: 2000,
    available: true,
    onSale: true,
  },
  {
    name: "Генератор поля",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
    price: 3000,
    available: false,
    onSale: false,
  },
  {
    name: "Біполярний елемент",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
    price: 1500,
    available: true,
    onSale: false,
  },
  {
    name: "Титаніум",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
    price: 2500,
    available: false,
    onSale: false,
  },
];

const makeProductsCards = (products) => {
  return products.map((p) => {
    const contEl = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = p.name;

    const pDesc = document.createElement("p");
    pDesc.textContent = p.description;

    const pPrice = document.createElement("p");
    pPrice.textContent = p.price;

    contEl.appendChild(h1);
    contEl.appendChild(pDesc);
    contEl.appendChild(pPrice);

    return contEl;
  });
};

const contEl = document.querySelector(".js-products");

makeProductsCards(products).forEach((pC) => {
  contEl.appendChild(pC);
});
