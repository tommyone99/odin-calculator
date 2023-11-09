let firstNum = 0;
let operator = "";
let secondNum = 0;

const ce = document.querySelector("#ce");

const nineKey = document.querySelector("#nine");
nineKey.addEventListener("click", populateDisplay);

const eightKey = document.querySelector("#eight");
eightKey.addEventListener("click", populateDisplay);

const sevenKey = document.querySelector("#seven");
sevenKey.addEventListener("click", populateDisplay);

const sixKey = document.querySelector("#six");
sixKey.addEventListener("click", populateDisplay);

const fiveKey = document.querySelector("#five");
fiveKey.addEventListener("click", populateDisplay);

const fourKey = document.querySelector("#four");
fourKey.addEventListener("click", populateDisplay);

const threeKey = document.querySelector("#three");
threeKey.addEventListener("click", populateDisplay);

const twoKey = document.querySelector("#two");
twoKey.addEventListener("click", populateDisplay);

const oneKey = document.querySelector("#one");
oneKey.addEventListener("click", populateDisplay);

const zeroKey = document.querySelector("#zero");
zeroKey.addEventListener("click", populateDisplay);

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
        case "zero":
            if (screen.innerHTML === ""){
                newNum = "";
                break;
            }
            newNum = 0;
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