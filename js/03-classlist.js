const magicBtn = document.querySelector(".js-magic-btn");
const navEl = document.querySelector(".site-nav");

// magicBtn.addEventListener("click", (e) => {
//   navEl.classList.add("super-nav");
//   setTimeout(removeClass, 3000);
// });

// function removeClass() {
//   navEl.classList.remove("super-nav");
// }

// magicBtn.addEventListener("click", () => {
//   navEl.classList.toggle("super-nav");
// });

// magicBtn.addEventListener("click", () => {
//   navEl.classList.replace("site-nav", "new-class");
// });

magicBtn.addEventListener("click", () => {
  console.log(navEl.classList.contains("site-nav"));
});
