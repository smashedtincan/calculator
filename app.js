// const one_btn = document.getElementById("1");
// const two_btn = document.getElementById("2");
// const three_btn = document.getElementById("3");
// const four_btn = document.getElementById("4");
// const five_btn = document.getElementById("5");
// const six_btn = document.getElementById("6");
// const seven_btn = document.getElementById("7");
// const eight_btn = document.getElementById("8");
// const nine_btn = document.getElementById("9");
// const zero_btn = document.getElementById("0");
// const digits_div = document.getElementsByClassName("digit");
// const operators_div = document.getElementsByClassName("operator");

const display_p = document.getElementById("display");
const clear_btn = document.getElementById("clear");
const equals_btn = document.getElementById("equals");
const digits_Arr = Array.from(document.getElementsByClassName("digit"));
const operators = Array.from(document.getElementsByClassName("operator"));

let dispStore = "";

clear_btn.addEventListener("click", () => clear());
digits_Arr.forEach(button => button.addEventListener("click", () => display(button)));
equals_btn.addEventListener("click", () => equals()); 
operators.forEach(button => button.addEventListener("click", () => opera(button)));

function opera(button) {
    dispStore += button.innerHTML;
}

function display(button) {
    display_p.innerHTML = button.innerHTML;
    dispStore += button.innerHTML;
}

function clear() {
    display_p.innerHTML = "";
    dispStore = "";
}

function equals() {
    line = Array.from(dispStore);
    console.log(line);
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


