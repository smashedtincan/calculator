const display_p = document.getElementById("display");
const clear_btn = document.getElementById("clear");
const equals_btn = document.getElementById("equals");
const digits_Arr = Array.from(document.getElementsByClassName("digit"));
const operators = Array.from(document.getElementsByClassName("operator"));

let dispStore = "";

const operatorRegExp = /[*/^+-]/;  

clear_btn.addEventListener("click", () => clear());
digits_Arr.forEach(button => button.addEventListener("click", () => { 
    display(button);
    dispStore += button.innerHTML;
}));
equals_btn.addEventListener("click", () => equals()); 
operators.forEach(button => button.addEventListener("click", () => opera(button)));

function opera(button) {
    dispStore += button.innerHTML;
    display_p.innerHTML = "";
}

function display(button) {
    display_p.innerHTML = display_p.innerHTML + button.innerHTML;
}

function clear() {
    display_p.innerHTML = "";
    dispStore = "";
}

function equals() {
    line = dispStore.split("");

    const operArr = [];
    let finalArr = [];

    line.forEach(function(currVal, index) { // get array of operators indexes
        if (currVal == "+") {
            operArr.unshift(index);
        }
    });

    let opIndex = operArr[0]; // where the operator is in the array
    finalArr // join number at the end of the equation
        .unshift((line
        .slice(opIndex+1)
        .join("")));
    finalArr // add operator
        .unshift("+");
    finalArr // join number before the operator
        .unshift((line
        .slice(0, opIndex)
        .join("")));

    // figure this part out -> trying to turn the numbers into numbers not strings
    /* 
    finalArr.forEach( (a) => {
        a = Number(a);
    });
    */

    opIndex -= 1; // there is one less index before the operator now

    let ans = finalArr[0] + finalArr[2]; // this is just to outline next steps

    console.log(ans);
}

// math functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b) {
    return (operator === "+") ? add(a, b)
    : (operator === "-") ? subtract(a, b)
    : (operator === "*") ? multiply(a, b)
    : (operator === "/") ? divide(a, b) 
    : "Please enter a valid operator."
}


