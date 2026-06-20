const container = document.getElementById("paletteContainer");
const hexCharacters = "0123456789ABCDEF";
const generateButton = document.getElementById("generateButton");
const miSelect = document.getElementById("backgroundColor");
const navbar = document.getElementById("navbar");
const interactionContainer = document.getElementById("interactionContainer");

const radioButtons = document.querySelectorAll('input[name="size"]');
radioButtons.forEach((radiobutton) => {
  radiobutton.addEventListener("click", function () {
    generateColorBoxes();
  });
});

const generateRandomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomCharacter = Math.floor(Math.random() * 16);
    color = color + hexCharacters[randomCharacter];
  }
  console.log(color); //me da bien el color siii
  return color;
};

const generateColorBoxes = () => {
  const selectedRadioButton = document.querySelector(
    'input[name="size"]:checked',
  );
  container.innerHTML = "";
  const selectedSize = selectedRadioButton.value;
  for (let i = 0; i < selectedSize; i++) {
    const colorDiv = document.createElement("div");
    const color = generateRandomColor();
    colorDiv.classList.add("color-box");
    colorDiv.style.backgroundColor = color;
    container.appendChild(colorDiv);
  }
};

generateButton.addEventListener("click", function () {
  generateColorBoxes();
});

miSelect.addEventListener("change", function () {
  if (miSelect.value === "white") {
    navbar.style.backgroundColor = "white";
    interactionContainer.style.backgroundColor = "white";
  }
  if (miSelect.value === "black") {
    navbar.style.backgroundColor = "black";
    interactionContainer.style.backgroundColor = "black";
  }
}); // aun tenemos que ajustar estilos para letras etc. pero al menos tenemos la funcionalidad basica.

generateColorBoxes();
