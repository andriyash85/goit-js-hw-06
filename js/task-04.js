let counterValue = 0;
const btnRef = document.querySelectorAll("button");
const vlRef = document.querySelector("#value");
btnRef.forEach((btn) => {
    btn.addEventListener("click", onClick);
    function onClick(e) {
        if (e.target.dataset.action === "decrement") {
            counterValue -= 1;
            vlRef.textContent = counterValue;
            
            console.log(e.target.dataset.action);
        }
        else {
            counterValue += 1;
         vlRef.textContent = counterValue;}
     };
 });