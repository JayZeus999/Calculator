//Operator functions
const add = (a,b) => 
    a + b;


const subtract = (a,b) =>
    a - b;


const multiply = (a,b) =>
    a * b;


const divide = (a,b) => {
    if (b === 0){
        return "Error";
    }
    return a / b;
}




//Create display;
const container = document.querySelector("#container");

const display = document.querySelector("#display");

let displayNum = "";

let updateDisplay = function (digits){
    displayNum += digits;
    display.textContent = displayNum;
}


let a = displayNum;
displayNum = "";

let b = displayNum;
displayNum = "";

let operator = null;
displayNum = "";


let operatorBtns = document.querySelectorAll(".op");

operatorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
    operator = btn.textContent;
    });
})

//operate function
const operate = function (num1, num2, operator){
    if (operator === "+"){
        return add(Number(num1), Number(num2));
    }else if (operator === "-"){
        return subtract(Number(num1), Number(num2));
    }else if (operator === "*"){
        return multiply(Number(num1), Number(num2));
    }else if (operator === "/"){
        return divide(Number(num1), Number(num2));
    }
}


//for all the numbers
const numBtns = document.querySelectorAll(".num");

numBtns.forEach(btn => {
    btn.addEventListener("click", () => {
    updateDisplay(btn.textContent);     //calls the updateDisplay
    });
}); 


const addBtn = document.querySelector(".add");

addBtn.addEventListener("click", () => {
    updateDisplay(addBtn.textContent);
    add(a,b);
});


const subBtn = document.querySelector(".sub");

subBtn.addEventListener("click", () => {
    updateDisplay(subBtn.textContent);
    subtract(a,b);
});


const multiplyBtn = document.querySelector(".mply");

multiplyBtn.addEventListener("click", () => {
    updateDisplay(multiplyBtn.textContent);
    let resultMply = multiply(a,b);
    display.textContent = resultMply;
});


const divideBtn = document.querySelector(".divd");

divideBtn.addEventListener("click", () => {
    updateDisplay(divideBtn.textContent);
    divide(a,b);
});

const equalsBtn = document.querySelector(".eqs");

equalsBtn.addEventListener("click", () => {
    updateDisplay(equalsBtn.textContent);

    operate(a,b);
});

const clearBtn = document.querySelector(".clr");

clearBtn.addEventListener("click", () => {
    displayNum = " ";
    display.textContent = " ";
});