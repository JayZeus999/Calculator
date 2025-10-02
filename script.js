const add = (a,b) => 
    a + b;

console.log(add());

const subtract = (a,b) =>
    a - b;

subtract();

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

let displayPanel = function (){
    let display = " ";
    
}