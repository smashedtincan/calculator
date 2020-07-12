const display_p = document.getElementById("display");
const clear_btn = document.getElementById("clear");
const equals_btn = document.getElementById("equals");
const digits_Arr = Array.from(document.getElementsByClassName("digit"));
const operators = Array.from(document.getElementsByClassName("operator"));

let a; let b; let operator; let dispStore = ""; let result;

clear_btn.addEventListener("click", () => clear());
digits_Arr.forEach(button => button.addEventListener("click", () => { 
    display(button);
    dispStore += button.innerHTML;
}));
equals_btn.addEventListener("click", () => equals()); 
operators.forEach(button => button.addEventListener("click", () => opera(button)));

function opera(button) {
    if (!operator) {
        a = Number(dispStore);
        operator = button.innerHTML;
    }
    else {
        b = Number(dispStore);
        equals();
        a = result;
        operator = button.innerHTML;        
    }
    display_p.innerHTML = "";
    dispStore = "";
}

function display(button) {
    display_p.innerHTML = display_p.innerHTML + button.innerHTML;
}

function clear() {
    display_p.innerHTML = "";
    dispStore = "";
    result = 0;
    a = 0;
    b = 0;
    operator = "";
}

function equals() {
    if (!operator) return;
    b = Number(dispStore);
    result = operate(operator, a, b);
    resultLength = result.toString().length;
    if (resultLength > 15) {
        result = result.toPrecision(15);
    }
    display_p.innerHTML = result;
    dispStore = result;
    operator = "";
}

// math functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => { 
    return (b == 0) ? "undefined" : a / b;
}

function operate(operator, a, b) {
    return (operator === "+") ? add(a, b)
    : (operator === "-") ? subtract(a, b)
    : (operator === "*") ? multiply(a, b)
    : (operator === "/") ? divide(a, b) 
    : "Please enter a valid operator."
}


