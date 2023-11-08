let firstNum = 0;
let operator = "";
let secondNum = 0;

function operate(firstNum, operator, secondNum) {
    let answer = 0;

    if (operator == "+") {
        answer = add(firstNum, secondNum);
    }
    else if (operator === "-") {
        answer = subtract(firstNum, secondNum);
    }
    else if (operator === "*") {
        answer = multiply(firstNum, secondNum);
    }
    else if (operator === "/") {
        answer = divide(firstNum, secondNum);
    };
};

function add(a, b) {
    let c = a + b;
    return c;
};

function subtract(a, b) {
    let c = a - b;
    return c;
};

function multiply(a, b) {
    let c = a * b;
    return c;
};

function divide(a, b) {
    let c = a / b;
    return c;
};