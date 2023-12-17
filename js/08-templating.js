// const titleEl = document.querySelector(".title");

// // console.log(titleEl.textContent);
// // console.log(titleEl.innerHTML);

// const cont = document.querySelector(".js-container");

// const newText = "<p>Це новий текст</p>";

// // cont.innerHTML = newText;
// cont.insertAdjacentHTML("beforeend", newText);

import Handlebars from "handlebars";
import headerTpl from "../templates/header.hbs";

const headerBox = document.querySelector(".header_box");
const headerEl = headerTpl();

let template = Handlebars.compile(headerEl);
headerBox.innerHTML = template();
