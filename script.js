const add = (a,b) => 
    a + b;


const subtract = (a,b) =>
    a - b;


const multiply = (a,b) =>
    a * b;

multiply();

const divide = (a,b) =>
    a / b;

divide();


let num1;
let operator;
let num2;

const operate = function (num1, num2){
    return multiply(num1,num2);
}

operate();


//Create display;
const container = document.querySelector("#container");
const display = document.querySelector("#display");

let displayNum = " ";

let updateDisplay = function (digits){
    displayNum += digits;
    display.textContent = displayNum;
}

//for all the numbers
const numBtns = document.querySelectorAll(".num");

numBtns.forEach(btn => {
    btn.addEventListener("click", () => {
    updateDisplay(btn.textContent);
    });
}); 


const addBtn = document.querySelector(".add");
container.appendChild(addBtn);

addBtn.addEventListener("click", () => {
    add(a,b);
});

const subBtn = document.querySelector(".sub");
container.appendChild(subBtn);

subBtn.addEventListener("click", () => {
    subtract(a,b);
});

const multiplyBtn = document.querySelector(".mply");
container.appendChild(multiplyBtn);

multiplyBtn.addEventListener("click", () => {
    multiply(a,b);
});

const divideBtn = document.querySelector(".divd");
container.appendChild(divideBtn);

divideBtn.addEventListener("click", () => {
    divide(a,b);
});
