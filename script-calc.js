let firstNum = 0;
let operator = "";
let secondNum = 0;
let displayValue = "";

const screen = document.querySelector("#screen");

//number button select and eventlisteners
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

//clear buttons select, event listener, and anonymous functions

const clearKey = document.querySelector("#clear");
clearKey.addEventListener("click", function() {
     displayValue = "0"
     firstNum = 0;
     secondNum = 0;
     operator = "";
     screen.textContent = "0";
    });

const ce = document.querySelector("#ce");
ce.addEventListener("click", function() {
        displayValue = "0"
        screen.textContent = "0";
    });

//operator event listeners
const plus = document.querySelector("#add");
plus.addEventListener("click", function() {
    if (firstNum === 0) { //if start of brand new equation
        operator = "+";
        getFirstNum();
    }
    else {
        operator = "+";
        getSecondNum();
    };



    });

function populateDisplay(e) {
    let newNum = e.target.id;
    switch(newNum) {
        case "nine":
            newNum = "9";
            break;
        case "eight":
            newNum = "8";
            break;
        case "seven":
            newNum = "7";
            break;
        case "six":
            newNum = "6";
            break;
        case "five":
            newNum = "5";
            break;
        case "four":
            newNum = "4";
            break;  
        case "three":
            newNum = "3";
            break;        
        case "two":
            newNum = "2";
            break;        
        case "one":
            newNum = "1";
            break;
        case "zero":
            newNum = "0";
            break;
    }
        if (displayValue == "0" && newNum == "0") {
            screen.textContent = "0";
        }
        else if (displayValue == "0" && newNum != "0") {
            displayValue = newNum;
            screen.textContent = displayValue;
        }
        else if (displayValue.length == 10) {
            newNum = "";
        }
        else {
            displayValue += newNum;
            screen.textContent = displayValue;
        }
    
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
    return answer;
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

function getFirstNum() {
    //make the firstNum variable equal to the value of the first user input
    firstNum = +displayValue;

    //reset internal display variable so answer value doesn't concatenate 
    displayValue = "0";
};

function getSecondNum() {
        //make the new input equal to the secondNum variable
        secondNum = +displayValue;

        //send to math function
        displayValue = operate(firstNum, operator, secondNum);

        //make new firstNum variable equal the value
        firstNum = +displayValue;

        //show user what the result of continuous calculation is
        screen.textContent = firstNum;

        //reset value so addional input doesn't concatenate
        displayValue = "0";
};