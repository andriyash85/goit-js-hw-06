const inpRef = document.querySelector("#validation-input");
const lengthRef = Number(inpRef.dataset.length);
console.log(lengthRef);
const changeClass = (addClass, deleteClass) => {
inpRef.classList.add(addClass);
    inpRef.classList.remove(deleteClass);
    
};
const handleInp = () => {
   
    if (inpRef.value.length === lengthRef) {
        changeClass("valid", "invalid")
    }
    else {
        changeClass("invalid", "valid") 
        
    }
};

inpRef.addEventListener("input", handleInp);