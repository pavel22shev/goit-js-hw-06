let newNumber = 0;
const minusBtn = document.querySelector("button[data-action='decrement']");
const plusBtn = document.querySelector("button[data-action='increment']");
const numberEl = document.querySelector("#value");

minusBtn.addEventListener("click", () => {
    newNumber -= 1;
    numberEl.textContent = newNumber;
});

plusBtn.addEventListener("click", () => {
    newNumber += 1;
    numberEl.textContent = newNumber;
});