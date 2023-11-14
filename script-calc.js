//declare global variables
let firstNum = 0;
let operator = "";
let secondNum = 0;
let displayValue = "";
const screen = document.querySelector("#screen");

//number button eventlisteners
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

const deciKey = document.querySelector("#decimal");
deciKey.addEventListener("click", populateDisplay);

//clear buttons event listeners

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
plus.addEventListener("click", operate);

const minus = document.querySelector("#subtract");
minus.addEventListener("click", operate);

const times = document.querySelector("#multiply");
times.addEventListener("click", operate);

const obelus = document.querySelector("#divide");
obelus.addEventListener("click", operate);

const equals = document.querySelector("#equals");
equals.addEventListener("click", operate);

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
        case "decimal":
            newNum = ".";
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
        else if (newNum === ".") {
            if (displayValue.includes(".") === true) {
                alert("ONLY ONE DECIMAL POINT IS ALLOWED BECAUSE OF MATH YOU BIG DUMMY!");
                return
            }
            else {
                displayValue += newNum;
                screen.textContent = displayValue;
            }
        }
        else {
            displayValue += newNum;
            screen.textContent = displayValue;
        }
    
}

function operate(e) {
    if (firstNum === 0) { //if start of brand new equation
        operator = e.target.id;
        getFirstNum();
    }
    else {

        //catch if user accidentally pressed operator sign twice

        //make the new input equal to the secondNum variable
        secondNum = +displayValue;

        let answer = 0;

        if (operator == "add") {
            answer = add(firstNum, secondNum);
        }
        else if (operator === "subtract") {
            answer = subtract(firstNum, secondNum);
        }
        else if (operator === "multiply") {
            answer = multiply(firstNum, secondNum);
        }
        else if (operator === "divide") {
            answer = divide(firstNum, secondNum);
        }
        else if (operator === "equals") {
            operator = e.target.id;
            return
        }

        displayValue = answer;
        

        //make new firstNum variable equal the value
        firstNum = +displayValue;

        //check to see if answer will overflow
        //show user what the result of continuous calculation is
        console.log("is going to check if overflow");
        screen.textContent = checkIfOverflow(firstNum.toString());

        //reset value so addional input doesn't concatenate
        displayValue = "0";

        operator = e.target.id;
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

function getFirstNum() {
    //make the firstNum variable equal to the value of the first user input
    firstNum = +displayValue;

    //reset internal display variable so answer value doesn't concatenate 
    displayValue = "0";
};

//todo: Fix overflowing numbers

function checkIfOverflow(displayStr) {
    console.log(displayStr);
    console.log(displayStr.length);
    if (displayStr.length > 10) {
        if (displayStr.includes(".")) {
            let n = 9 - displayStr.indexOf(".");
            displayStr = +displayStr;
            return Math.round(displayStr * (10 ** n))/ (10 ** n);
        }
        else {
            return "E" + displayStr.substring(0, 9);
        }
    }
    return displayStr;
}
