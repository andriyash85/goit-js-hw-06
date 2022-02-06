const formRef = document.querySelector(".login-form");
const obj = {};

const onSubmitForm = (e) => { 
    e.preventDefault();
    const email = formRef.elements.email.value;
    const password = formRef.elements.password.value;
    
    if (!email || !password) {
        alert("Заполните все поля");
    }
        else {
        
        obj.email = email;
        obj.password = password;
        console.log(obj);
    }
    formRef.reset();
    
};
formRef.addEventListener("submit", onSubmitForm);

