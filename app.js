const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

function operate(operator, a, b) {
    return (operator === "+") ? add(a, b)
    : (operator === "-") ? subtract(a, b)
    : (operator === "*" || operator === "x") ? multiply(a, b)
    : (operator === "/") ? divide(a, b) 
    : "Please enter a valid operator."
}
console.log(operate("*", 1, 2))
