let firstNum = 0;
let operator = "";
let secondNum = 0;

const ce = document.querySelector("#ce");

const nineKey = document.querySelector("#nine");
nineKey.addEventListener("click", populateDisplay);

const eightKey = document.querySelector("#eight");
eightKey.addEventListener("click", populateDisplay);

function populateDisplay(e) {
    const screen = document.querySelector("#screen");
    let newNum = e.target.id;
    
    switch(newNum) {
        case "nine":
            newNum = 9;
            break;
        case "eight":
            newNum = 8;
            break;
        case "seven":
            newNum = 7;
            break;
        case "six":
            newNum = 6;
            break;
        case "five":
            newNum = 5;
            break;
        case "four":
            newNum = 4;
            break;  
        case "three":
            newNum = 3;
            break;        
        case "two":
            newNum = 2;
            break;        
        case "one":
            newNum = 1;
            break;
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