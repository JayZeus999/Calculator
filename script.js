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

const subDisplay = document.querySelector(".subdisplay");
// container.insertBefore(display, subDisplay);

let displayNum = "";

let updateDisplay = function (digits){
    displayNum += digits;
    display.textContent = displayNum;
}


let a =  null;

let b = null;

let operator = null;


let operatorBtns = document.querySelectorAll(".op");

operatorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
    
    if (displayNum === "") return;
    
    a = Number(displayNum);

    operator = btn.textContent;

    display.textContent = `${a} ${operator}`;

    displayNum = "";
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

const subBtn = document.querySelector(".sub");

const multiplyBtn = document.querySelector(".mply");

const divideBtn = document.querySelector(".divd");



const equalsBtn = document.querySelector(".eqs");

equalsBtn.addEventListener("click", () => {
    if (a === null || operator === null || displayNum === "") return;
    
    b = Number(displayNum);

    subDisplay.textContent = `${a} ${operator} ${b}`;

    const result = operate(a, b, operator);
    
    display.textContent = result;
    displayNum = result.toString();

    a = result;
    operator = null;
});


const clearBtn = document.querySelector(".clr");

clearBtn.addEventListener("click", () => {
    
    displayNum = "";
    display.textContent = "";
    subDisplay.textContent = "";
    a = null;
    b = null;
    operator = null;
});


const bspcBtn = document.querySelector(".bspc");

bspcBtn.addEventListener("click", () => {
    let result2 = displayNum.slice(0,-1);
    display.textContent = result2;
    displayNum = "";
    displayNum = result2;
});

console.log("a:", a, "b:", b, "op:", operator);
