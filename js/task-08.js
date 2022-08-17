const inputEl = document.querySelector("form.login-form")

inputEl.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === "" || password.value === "")
        return alert("Please fill in all fields");

    const result = { email: email.value, password: password.value };
    console.log(result);
    event.currentTarget.reset();
})