const inpRef = document.querySelector("#font-size-control");
const txtRef = document.querySelector("#text");
const onChangeSize = () => { 
    const size = inpRef.value;
    txtRef.style.fontSize = `${size}px`;
};



inpRef.addEventListener("input", onChangeSize);