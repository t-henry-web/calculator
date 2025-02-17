// TODO:
// When chaining functions together and dividing by zero, display shows "Infinity" instead of error message
// Add functionality to decimal and backspace buttons
// Prevent large numbers from overflowing display
// Keyboard functionality

// Basic operation functions
function add(x, y) {
    console.log(`add function: ${x} + ${y}`);
    return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
    console.log(`subtract function: ${x} - ${y}`);
    return parseFloat(x) - parseFloat(y);
}

function multiply(x, y) {
    console.log(`multiply function: ${x} * ${y}`);
    return parseFloat(x) * parseFloat(y);
}

function divide(x, y) {
    console.log(`divide function: ${x} / ${y}`);
    if (y === 0) {
        return "Whoops! Division by zero";
    }
    return parseFloat(x) / parseFloat(y);
}

function operate(operator, x, y) {
    console.log(`operate function: operator = ${operator}, x = ${x}, y = ${y}`);
    switch (operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
        default:
            return "ERROR";
    }
}

// Function to handle all operator button presses
function handleOperatorButton(operatorSymbol) {
    console.log(`Button Pressed: ${operatorSymbol}`);
    document.querySelector(".display").textContent = operatorSymbol;
    console.log(`Before operation: inputOne = ${inputOne}, inputTwo = ${inputTwo}, currentDisplay = ${currentDisplay}, operator = ${operator}, operatorPressed = ${operatorPressed}`);

    if (operatorPressed === false) {
        operator = operatorSymbol;
        inputOne = currentDisplay;
        currentDisplay = "";
    } else {
        inputTwo = currentDisplay;
        currentDisplay = operate(operator, inputOne, inputTwo);
        document.querySelector(".display").textContent = parseFloat(currentDisplay);
        operator = operatorSymbol;
        inputOne = currentDisplay;
        currentDisplay = "";
    }

    operatorPressed = true;
    console.log(`After operation: inputOne = ${inputOne}, inputTwo = ${inputTwo}, currentDisplay = ${currentDisplay}, operator = ${operator}, operatorPressed = ${operatorPressed}`);
}

// Function to update the display
function updateDisplay(value) {
    console.log(`updateDisplay function: value = ${value}`);
    currentDisplay += value;
    document.querySelector(".display").textContent = parseFloat(currentDisplay);
    console.log(`Updated currentDisplay: ${currentDisplay}`);
}

// Function to clear display and variables
function clear() {
	console.log("Button Pressed: C");
    currentDisplay = 0; // Reset the display
    document.querySelector(".display").textContent = currentDisplay;
    inputOne = "";
    inputTwo = "";
    operator = "";
    operatorPressed = false; // Reset operatorPressed
    console.log(`After clear: inputOne = ${inputOne}, inputTwo = ${inputTwo}, currentDisplay = ${currentDisplay}, operator = ${operator}, operatorPressed = ${operatorPressed}`);
}

// Initialise variables
let inputOne = "";
let inputTwo = "";
let currentDisplay = 0;
let operator = "";
let operatorPressed = false;

// Set the initial display to "0"
document.querySelector(".display").textContent = "0";
console.log(`Initial display set to: ${currentDisplay}`);

// Handle digit buttons
document.querySelector("#seven").addEventListener("click", () => {
    console.log("Button Pressed: 7");
    updateDisplay("7");
});
document.querySelector("#eight").addEventListener("click", () => {
    console.log("Button Pressed: 8");
    updateDisplay("8");
});
document.querySelector("#nine").addEventListener("click", () => {
    console.log("Button Pressed: 9");
    updateDisplay("9");
});
document.querySelector("#four").addEventListener("click", () => {
    console.log("Button Pressed: 4");
    updateDisplay("4");
});
document.querySelector("#five").addEventListener("click", () => {
    console.log("Button Pressed: 5");
    updateDisplay("5");
});
document.querySelector("#six").addEventListener("click", () => {
    console.log("Button Pressed: 6");
    updateDisplay("6");
});
document.querySelector("#one").addEventListener("click", () => {
    console.log("Button Pressed: 1");
    updateDisplay("1");
});
document.querySelector("#two").addEventListener("click", () => {
    console.log("Button Pressed: 2");
    updateDisplay("2");
});
document.querySelector("#three").addEventListener("click", () => {
    console.log("Button Pressed: 3");
    updateDisplay("3");
});
document.querySelector("#zero").addEventListener("click", () => {
    console.log("Button Pressed: 0");
    updateDisplay("0");
});

// Handle operator buttons
document.querySelector("#add").addEventListener("click", () => handleOperatorButton("+"));
document.querySelector("#sub").addEventListener("click", () => handleOperatorButton("-"));
document.querySelector("#mult").addEventListener("click", () => handleOperatorButton("*"));
document.querySelector("#divide").addEventListener("click", () => handleOperatorButton("/"));

// Handle equals button
document.querySelector("#equals").addEventListener("click", () => {
    console.log("Button Pressed: =");
    console.log(`Before equals operation: inputOne = ${inputOne}, inputTwo = ${inputTwo}, currentDisplay = ${currentDisplay}, operator = ${operator}, operatorPressed = ${operatorPressed}`);
   
	if (operator === "/" && parseFloat(currentDisplay) === 0) {
		clear()
		alert("Whoops! Can't divide by 0!");
    } else if (operatorPressed === false) {
        inputOne = currentDisplay;
		currentDisplay = "";
    } else {
        inputTwo = currentDisplay;
        currentDisplay = operate(operator, inputOne, inputTwo);
        document.querySelector(".display").textContent = currentDisplay;
        inputOne = currentDisplay;
		inputTwo = "";
		operatorPressed = false;
    }
    console.log(`After equals operation: inputOne = ${inputOne}, inputTwo = ${inputTwo}, currentDisplay = ${currentDisplay}, operator = ${operator}, operatorPressed = ${operatorPressed}`);
});

// Handle clear button
document.querySelector("#clear").addEventListener("click", () => {
    clear();
});


