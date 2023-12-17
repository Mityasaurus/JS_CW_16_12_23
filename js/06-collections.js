const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const colorPickerContEl = document.querySelector(".js-color-picker");
const makeColorPickerOptions = (options) => {
  return options.map((o) => {
    const btnEl = document.createElement("button");
    btnEl.type = "button";
    btnEl.classList.add("color-picker__option");
    btnEl.textContent = o.label;
    btnEl.style.backgroundColor = o.color;

    return btnEl;
  });
};

const buttons = makeColorPickerOptions(colorPickerOptions);
const magicBtn = document.querySelector(".js-magic-btn");
magicBtn.addEventListener("click", () => {
  buttons.forEach((btn) => {
    colorPickerContEl.appendChild(btn);
  });
});
