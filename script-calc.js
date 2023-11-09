let firstNum = 0;
let operator = "";
let secondNum = 0;

const ce = document.querySelector("#ce");

const nineKey = document.querySelector("#nine");
nineKey.addEventListener("click", populateDisplay);

function populateDisplay(e) {
    const screen = document.querySelector("#screen");
    let newNum = e.target.id;

    if (newNum === "nine") {
        newNum = 9;
    }

    screen.innerHTML += newNum;
}

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