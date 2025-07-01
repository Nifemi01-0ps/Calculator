//Declaring Variables
let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let result = "";

//Adding Event listener to my Calculator app
//clear
const cleared = document.querySelector("#clear");
cleared.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
    currentInput = "";
    updateDisplay();
});
const modulus = document.querySelector("#modulus");
modulus.addEventListener("click", () => {
   currentInput += "%";
   updateDisplay();
});

const divide = document.querySelector("#divide");
divide.addEventListener("click", () => {
    currentInput += "/";
    updateDisplay();
})
const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    currentInput += "7";
    updateDisplay();
});
const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    currentInput += "8";
    updateDisplay();
});
const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    currentInput += "9";
    updateDisplay();
});
const multiply = document.querySelector("#multiply");
multiply.addEventListener("click", () => {
    currentInput += "*";
    updateDisplay();
});
const four = document.querySelector("#four");
four.addEventListener("click", () =>{
    currentInput += "4";
    updateDisplay();
});
const five = document.querySelector("#five");
five.addEventListener("click", () =>{
    currentInput += "5";
    updateDisplay();
});
const six = document.querySelector("#six");
six.addEventListener("click", () =>{
    currentInput += "6";  
    updateDisplay()
});
const minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
   currentInput += "-";
   updateDisplay();
})
const one = document.querySelector("#one");
one.addEventListener("click", () =>{
    currentInput += "1";
    updateDisplay();
});
const two = document.querySelector("#two");
two.addEventListener("click", () =>{
    currentInput += "2";
    updateDisplay();
});
const three = document.querySelector("#three");
three.addEventListener("click", () =>{
    currentInput += "3";
    updateDisplay();
});
const plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
    currentInput += "+";
    updateDisplay();
})
// const point = document.querySelector("#point");
// point.addEventListener("click", () => {
//     currentInput += ".";
//     updateDisplay();
// })
const odoo = document.querySelector("#odoo");
odoo.addEventListener("click", () => {
    currentInput += "0";
    updateDisplay();
});
const erase = document.querySelector("#erase");
erase.addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
});
const output = document.querySelector("#output");
output.addEventListener("click", () => {
    const operatorMatch = currentInput.match(/[+\-*/%]/);
    if (!operatorMatch) {
        updateDisplay("Error");
        return;
    }
    currentOperator = operatorMatch[0];
    //Split input by Operator
    const parts = currentInput.split(currentOperator);
    if (parts.length !== 2) {
        updateDisplay("Error");
        return;
    }
    firstNumber = parseFloat(parts[0]);
    secondNumber = parseFloat(parts[1]);
    if (isNaN(firstNumber) || isNaN(secondNumber)) { 
        updateDisplay("Error");
        return;
    }
    operate();
    currentInput = result.toString();
    updateDisplay();
    resultDisplayed = true;
})

//display
const display = document.querySelector(".display");
let currentInput = "";
function updateDisplay() {
    display.textContent = currentInput || "0";
};

// Operator and operand
//sum operator
function sum(a, b) {
    return a + b;
};

// subtraction operator
function subtraction(a, b) {
    return a - b;
};

// multiplication operator
function multiplication(a, b) {
    return a * b;
}

// division operator
function division(a, b) {
    return a / b;
};

// Modulus Operator
function remainder(a, b) {
    if (a > b) {
        return a % b;
    } else {
        alert("Error");
    }
    return
};

// operate Function
function operate() {
    if (currentOperator === "+") {
        result = sum(firstNumber, secondNumber);
    } else if (currentOperator === "-") {
        result = subtraction(firstNumber, secondNumber);
    } else if (currentOperator === "*") {
        result = multiplication(firstNumber, secondNumber);
    } else if (currentOperator === "/") {
        result = division(firstNumber, secondNumber);
    } else if (currentOperator === "%") {
        result = remainder(firstNumber, secondNumber);
    }
    console.log(`${firstNumber} ${currentOperator} ${secondNumber} = ${result}`);
};