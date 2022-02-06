const liRef = document.querySelectorAll('.item');
console.log('Number of categories:', liRef.length);
[...liRef].forEach((element) => {
    console.log('Category:', element.querySelector("h2").textContent)
    console.log('Elements:', element.querySelectorAll("li").length);
});

