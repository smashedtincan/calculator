const display_p = document.getElementById("display");
const clear_btn = document.getElementById("clear");
const equals_btn = document.getElementById("equals");
const digits_Arr = Array.from(document.getElementsByClassName("digit"));
const operators = Array.from(document.getElementsByClassName("operator"));

let dispStore = "";

const operatorRegExp = /[*/^+-]/;  

clear_btn.addEventListener("click", () => clear());
digits_Arr.forEach(button => button.addEventListener("click", () => display(button)));
equals_btn.addEventListener("click", () => equals()); 
operators.forEach(button => button.addEventListener("click", () => opera(button)));

function opera(button) {
    dispStore += button.innerHTML;
    display_p.innerHTML = "";
}

function display(button) {
    display_p.innerHTML = display_p.innerHTML + button.innerHTML;
    dispStore += button.innerHTML;
}

function clear() {
    display_p.innerHTML = "";
    dispStore = "";
}

function equals() {
    line = Array.from(dispStore);

    // get array of operators indexes
    const operArr = [];
    const finalArr = [];
    line.forEach(function(currVal, index) {
        if (currVal == "+") {
            operArr.unshift(index);
        }
    });
    
    // *SLICE* and join indexes between operators
    operArr.forEach(function(currVal, index, arrObj) {
        for (let i = index; i; i++) {
            let temp = line.slice(currVal + 1);
            temp.join("");
            finalArr.push(temp.join(""));
            temp.pop();
        }
    });

    console.log(finalArr);

    // let a = [];
    // for (let i = 0; i < line.length; i++) {
    //     // find index of operator
    //     let temp = (line.indexOf("+"));
    //     a.pop(temp);
    // }
    // console.log(a);

    // join indexes before operator
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


