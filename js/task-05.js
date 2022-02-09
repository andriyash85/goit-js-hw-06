const inpRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

const handleInp = () => {
    // (inpRef.value === ""||" ")?nameRef.textContent = "Anonymous" : nameRef.textContent = inpRef.value;

    
    if (inpRef.value === "" || " ") {
        nameRef.textContent = "Anonymous";
    }
    else {
      nameRef.textContent = inpRef.value;
       
    }
 };
 inpRef.addEventListener("input", handleInp);
    

