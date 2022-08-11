const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
    if (textInput.value.length === Number(textInput.dataset.length)) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    }
    else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }
});