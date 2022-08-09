const nameInput = document.querySelector("#name-input");
const nameTitle = document.querySelector("#name-output");


nameInput.addEventListener('input', (event) => {
    nameTitle.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        nameTitle.textContent = 'Anonymous'
    }
});
