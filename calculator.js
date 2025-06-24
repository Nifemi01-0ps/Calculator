//Declaring Variables
const firstNumber = 150;
const operator = "+";
const secondNumber = 15;

// Operator and operand
//sum operator
function sum() {
    let result = firstNumber + secondNumber;
    console.log(result);
};

// subtraction operator
function subtraction() {
    let result = firstNumber - secondNumber;
    console.log(result);
};

// multiplication operator
function multiplication() {
    let result = firstNumber * secondNumber;
    console.log(result);
}

// division operator
function division() {
    let result = firstNumber / secondNumber;
    console.log(result);
};

// operate Function
function operate() {
    if (operator === "+") {
        result = sum(firstNumber, secondNumber);
    } else if (operator === "-") {
        result = subtraction(firstNumber, secondNumber);
    } else if (operator === "*") {
        result = multiplication(firstNumber, secondNumber);
    } else if (operator === "/") {
        result = division(firstNumber, secondNumber);
    };
    console.log(`${firstNumber} ${operator} ${secondNumber}`);
};
operate();
