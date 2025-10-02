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


const container = document.querySelector("#container");
document.body.appendChild(container);

let display = document.querySelector("#display");
container.append(display);


let displayNum = " ";

let updateDisplay = function (digits){
    displayNum += digits;
    display.textContent = displayNum;
}

updateDisplay();


const numBtns = document.querySelector(".num");
container.appendChild(numBtns);

numBtns.addEventListener("click", );


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
