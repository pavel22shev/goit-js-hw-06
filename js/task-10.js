const inputNum = document.querySelector('[type="number"]')
const btnCreateEl = document.querySelector('[data-create]')
const btnDestroyEl = document.querySelector('[data-destroy]')
const addBoxEl = document.querySelector("#boxes")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// inputNum.addEventListener("input", inputNumber)

// function inputNumber (event) {
//   const inputValue = Number(event.target.value);
//   console.log(inputValue);
// }
let addSize = 30;

btnCreateEl.addEventListener ("click", () => {  
  for (let i = 0; i < Number(inputNum.value); i++) {
    const box = document.createElement("div");
    addSize += 10; 
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.width = `${addSize}px`;
    box.style.height = `${addSize}px`;
    addBoxEl.append(box);
  }
})

btnDestroyEl.addEventListener("click", () => {
  addSize = 30;
  addBoxEl.innerHTML = "";
})
