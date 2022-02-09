 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const numberRef = document.querySelector("input");
const btnCrtRef = document.querySelector("button[data-create]");
const btnDstRef = document.querySelector("button[data-destroy]");
const boxRef = document.querySelector("#boxes");
let arrCollection = [];
const crtBtn = () => {
  const number = numberRef.value;
  for (let i = 0; i < number; i++) {
    const divRef = document.createElement('div'); 
 divRef.style.backgroundColor = getRandomHexColor();
divRef.style.width = 30+10*i+"px";   
    divRef.style.height = 30+10*i+"px"; 
    arrCollection.push(divRef);  
}
  boxRef.append(...arrCollection);
}
const dstBtn = () => { 
  arrCollection = [];
  boxRef.innerHTML = '';
  numberRef.value = '';

};

btnCrtRef.addEventListener("click", crtBtn);
btnDstRef.addEventListener("click", dstBtn);