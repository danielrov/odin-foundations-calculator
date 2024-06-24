const display = document.querySelector(".display-text")
const numbers = document.querySelectorAll(".number")
const opeators = document.querySelectorAll(".operation")
const calculate = document.querySelector(".equal")
const clear = document.querySelector(".clear")
let firstNumber
let secondNumber
let operation
let values = []
let result

clear.addEventListener("click", function() {
    firstNumber = 0;
    secondNumber = 0;
    values = [];
    operation = "";
    display.innerHTML = "";
});

numbers.forEach(function(number) {
    number.addEventListener("click", function() {
        addToDisplay(number.textContent)
        values.push(+number.textContent)
    });
});

opeators.forEach(function(operator) {
    operator.addEventListener("click", function(){
        firstNumber = parseInt(values.join(""));
        operation = operator.textContent;
        values = [];
        display.innerHTML = "";
    });
});

calculate.addEventListener("click", function() {
    secondNumber = parseInt(values.join(""));
    display.innerHTML = "";
    values = [];
    operate(firstNumber,secondNumber,operation);
});

function addToDisplay(textToAdd) {
    const text = document.createTextNode(textToAdd);
    display.appendChild(text);
};

const add = function(a,b) {
    result = +a + +b;
    result = result.toFixed(2);
    values = [result];
	addToDisplay(result);
};

const subtract = function(a,b) {
	result = +a - +b;
    result = result.toFixed(2);
    values = [result];
	addToDisplay(result);
};

const multiply = function(a,b) {
    result = +a * +b;
    result = result.toFixed(2);
    values = [result];
	addToDisplay(result);
};

const divide = function (a,b) {
    result = +a / +b;
    result = result.toFixed(2);
    values = [result];
	addToDisplay(result);
}

function operate(firstNumber, secondNumber, operator) {
    if (operator == "+") {
        add(firstNumber,secondNumber);
    } else if (operator == "-") {
        subtract(firstNumber,secondNumber)
    } else if (operator == "x") {
        multiply(firstNumber,secondNumber)
    } else if (operator == "/") {
        divide(firstNumber,secondNumber)
    } else {
        console.log("Formato incorrecto")
    }
}