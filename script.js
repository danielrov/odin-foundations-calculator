const display = document.querySelector(".display-text")
const numbers = document.querySelectorAll(".number")
const opeators = document.querySelectorAll(".operation")
const calculate = document.querySelector(".equal")
const clear = document.querySelector(".clear")
let firstNumber = 0
let secondNumber = 0
let operation = 0
let values = []
let result = 0

clear.addEventListener("click", function() {
    firstNumber = 0;
    secondNumber = 0;
    values = [];
    operation = "";
    result = 0
    display.innerHTML = "";
});

numbers.forEach(function(number) {
    number.addEventListener("click", function() {
        if (values.length == 0) {
            display.innerHTML = "";
        };
        if (values.length < 8) {
            addToDisplay(number.textContent);
            values.push(+number.textContent);
        };
    });
});

opeators.forEach(function(operator) {
    operator.addEventListener("click", function(){
        display.innerHTML = "";
        if (firstNumber && operation) {
            secondNumber = parseFloat(values.join(""));
            operate(firstNumber,secondNumber,operation);
        };
        firstNumber = parseFloat(values.join(""));
        operation = operator.textContent;
        values = [];
    });
});

calculate.addEventListener("click", function() {
    secondNumber = parseFloat(values.join(""));
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
    values = [+result];
	addToDisplay(result);
};

const subtract = function(a,b) {
	result = +a - +b;
    result = result.toFixed(2);
    values = [+result];
	addToDisplay(result);
};

const multiply = function(a,b) {
    result = +a * +b;
    result = result.toFixed(2);
    values = [+result];
	addToDisplay(result);
};

const divide = function (a,b) {
    result = +a / +b;
    result = result.toFixed(2);
    values = [+result];
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
    firstNumber = 0;
    secondNumber = 0;
    operation = "";
}