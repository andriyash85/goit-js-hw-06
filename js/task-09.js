function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector("body");
const btnRef = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");
const onClick = () => { 
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  colorRef.textContent = color;
};

btnRef.addEventListener("click", onClick);