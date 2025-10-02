const add = (a,b) => 
    a + b;


const subtract = (a,b) =>
    a - b;


const multiply = (a,b) =>
    a * b;


const divide = (a,b) =>
    a / b;




//Create display;
const container = document.querySelector("#container");

const display = document.querySelector("#display");

let displayNum = "";

let updateDisplay = function (digits){
    displayNum += digits;
    display.textContent = displayNum;
}


let a = prompt("pick first number");
let b = prompt("pick second number");
let operator = null;

let operatorBtns = document.querySelectorAll(".op");

operatorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
    operator = btn.textContent;
    });
})

//operate function
const operate = function (num1, num2){
    return multiply(num1,num2);
}

operate(a,b);


//for all the numbers
const numBtns = document.querySelectorAll(".num");

numBtns.forEach(btn => {
    btn.addEventListener("click", () => {
    updateDisplay(btn.textContent);     //calls the updateDisplay
    });
}); 


const addBtn = document.querySelector(".add");


addBtn.addEventListener("click", () => {
    add(a,b);
});

const subBtn = document.querySelector(".sub");


subBtn.addEventListener("click", () => {
    subtract(a,b);
});

const multiplyBtn = document.querySelector(".mply");


multiplyBtn.addEventListener("click", () => {
    let result = multiply(a,b);
    display.textContent = result;
});

const divideBtn = document.querySelector(".divd");


divideBtn.addEventListener("click", () => {
    divide(a,b);
});


const clearBtn = document.querySelector(".clr");

clearBtn.addEventListener("click", () => {
    displayNum = " ";
    display.textContent = " ";
});