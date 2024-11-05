const numberButtons = document.querySelectorAll(".number.button");
const opButtons = document.querySelectorAll(".op.button");
const equalButton = document.querySelector("#equal");
const dotButton = document.querySelector("#dot");
const clearButton = document.querySelector("#clear-btn");
const deleteButton = document.querySelector("#delete-btn");

const bottomDisplay = document.querySelector(".bottom-display");
const topDisplay = document.querySelector(".top-display");

let n1
let n2
let operator

clearButton.addEventListener("click", () => {
    n1 = null; 
    n2 = null;
    operator = null;
    bottomDisplay.textContent = "";
    topDisplay.textContent = "";
})

deleteButton.addEventListener("click", () => {
    if (bottomDisplay.textContent.length > 0) {
        bottomDisplay.textContent = bottomDisplay.textContent.slice(0,-1);
    }
})

numberButtons.forEach(number => {
    number.addEventListener("click", () => {
        bottomDisplay.textContent += number.id;
    })
});

opButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (n1 == null || operator == null) {
            n1 = Number(bottomDisplay.textContent);
            operator = button.id;
            topDisplay.textContent = bottomDisplay.textContent + " " + button.id;
            bottomDisplay.textContent = "";
        }

        else {
            n2 = Number(bottomDisplay.textContent);
            n1 = operate(n1,n2,operator)
            operator = button.id;
            topDisplay.textContent = n1 + " " + operator;
            bottomDisplay.textContent = "";
        }
    })
})

equalButton.addEventListener("click", () => {

    if (operator != null) {
        n2 = Number(bottomDisplay.textContent);
        topDisplay.textContent += " " + bottomDisplay.textContent;
        bottomDisplay.textContent = operate(n1,n2,operator);
        operator = null;
    }
})

dotButton.addEventListener("click", () => {
    if(!bottomDisplay.textContent.includes(".")) {
        bottomDisplay.textContent += ".";
    }
})


//OPERATIONS

function add(n1,n2) {
    return n1 + n2
}

function subtract(n1,n2) {
    return n1 - n2
}

function multiply(n1,n2) {
    return n1 * n2
}

function divide(n1,n2) {
    return n1 / n2
}

function operate(n1, n2, operator) {
    if (operator == "+") {return add(n1,n2)};
    if (operator == "-") {return subtract(n1,n2)}
    if (operator == "×") {return multiply(n1,n2)}
    if (operator == "÷") {return divide(n1,n2)}

}