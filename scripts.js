function Add(...args){
    return args.reduce((num1, num2) => num1 + num2, 0);
}

function Subtract(num1, num2){
    return num1 - num2;
}

function Multiply(...args){
    return args.reduce((num1, num2) => num1*num2, 1);
}

function Divide(num1, num2){
    return num1 / num2;
}

function Operate(){
    if(num2 == 0){
        num2 = parseFloat(displayNumber);
    }
    displayNumber = operation(num1, num2);
    num1 = displayNumber;
    DisplayNumber(num1);
}

function DisplayNumber(num){
    let result = parseFloat(num);
    display.textContent = result;
}

function SelectInteger(e){
    let number = e.target.attributes.dataVal.nodeValue;
    num2 = 0;
    displayNumber += number;
    DisplayNumber(displayNumber);
}

function SelectDecimal(){
    if(displayNumber == 0){
        displayNumber += "0.";
        DisplayNumber(displayNumber);
    }
    else if(!displayNumber.includes(".")){
        displayNumber += ".";
        DisplayNumber(displayNumber);
    }
}

function SelectOperator(e){
    let operator = e.target.attributes.dataOp.nodeValue;
    num1 = parseFloat(displayNumber);
    num2 = 0;
    displayNumber = 0;

    switch(operator){
        case "Add":
            operation = Add;
            break;
        case "Subtract":
            operation = Subtract;
            break;
        case "Multiply":
            operation = Multiply;
            break;
        case "Divide":
            operation = Divide;
            break;
    }
}

function Clear(){
    displayNumber = 0;
    num1 = 0;
    num2 = 0;
    DisplayNumber(0);
}

let displayNumber = 0;
let num1 = 0;
let num2 = 0;
let operation = null;
const display = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach( number => {
    number.addEventListener('click', SelectInteger);
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach( operator => {
    operator.addEventListener('click', SelectOperator);
});

const operateButton = document.querySelector(".operate");
operateButton.addEventListener('click', Operate);

const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', Clear);

const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener('click', SelectDecimal);