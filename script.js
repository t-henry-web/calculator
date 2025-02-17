// TODO:
// Calculate and update display on second press of operator
// Allow initial calculations with default displayed 0
// Stop display from overflowing on 12+ digits. Round calculated figures
// Add functionality to decimal, backspace buttons

// Change logic that after pressing operator second time. Perform equals calculation, set input1 to result


// functions for basic operations
function add(x, y) {
	return parseFloat(x) + parseFloat(y);
}
function subtract(x, y) {
	return parseFloat(x) - parseFloat(y);
}
function multiply(x, y) {
	return parseFloat(x) * parseFloat(y);
}
function divide(x, y) {
	return parseFloat(x) / parseFloat(y);
}

// function which calls one of the above functions on two numbers.
function operate() {
	switch (operation) {
		case "+":
			return add(oldInput, newInput);
		case "-":
			return subtract(oldInput, newInput);
		case "*":
			return multiply(oldInput, newInput);
		case "/":
			return divide(oldInput, newInput);
	};
};

// updates display
function updateDisplay(value) {
	currentDisplay += value;
	display.textContent = parseFloat(currentDisplay);
}

// variables to track inputs and operations
let oldInput = 0;
let newInput = "";
let operation = "";
let currentDisplay = "0";
let operatorCount = 0;
let lastPressed = "";


// update display text and set display to 0 if there's no value
const display = document.querySelector(".display");
display.textContent = parseFloat(currentDisplay) || "0";

// button presses
const press1 = document.querySelector("#one");
const press2 = document.querySelector("#two");
const press3 = document.querySelector("#three");
const press4 = document.querySelector("#four");
const press5 = document.querySelector("#five");
const press6 = document.querySelector("#six");
const press7 = document.querySelector("#seven");
const press8 = document.querySelector("#eight");
const press9 = document.querySelector("#nine");
const press0 = document.querySelector("#zero");
const pressAdd = document.querySelector("#add");
const pressSub = document.querySelector("#sub");
const pressMult = document.querySelector("#mult");
const pressDivide = document.querySelector("#divide");
const pressEquals = document.querySelector("#equals");
const pressClear = document.querySelector("#clear");
const pressBack = document.querySelector("#back");
const pressDecimal = document.querySelector("#decimal");

// handle number buttons
press1.addEventListener("click", () => {
	updateDisplay("1");
});
press2.addEventListener("click", () => {
  updateDisplay("2");
});
press3.addEventListener("click", () => {
  updateDisplay("3");
});
press4.addEventListener("click", () => {
  updateDisplay("4");;
});
press5.addEventListener("click", () => {
  updateDisplay("5");
});
press6.addEventListener("click", () => {
  updateDisplay("6");
});
press7.addEventListener("click", () => {
  updateDisplay("7");
});
press8.addEventListener("click", () => {
  updateDisplay("8");
});
press9.addEventListener("click", () => {
  updateDisplay("9");
});
press0.addEventListener("click", () => {
  updateDisplay("0");
});
// handle operator buttons
pressAdd.addEventListener("click", () => {
  pressOperator("+");
});
pressSub.addEventListener("click", () => {
  pressOperator("-");
});
pressMult.addEventListener("click", () => {
  pressOperator("*");
});
pressDivide.addEventListener("click", () => {
  pressOperator("/");
});

// press operation button
function pressOperator(symbol) {
	lastPressed = operator;
	operation = symbol;
	if (operatorCount === 0) {
		oldInput = currentDisplay;
		currentDisplay = "";
		display.textContent = symbol;
		operatorCount=1;
	} else {
		
	}
}

// handle equals button
pressEquals.addEventListener("click", () => {
	if (operatorCount === 0) {
		oldInput = currentDisplay;
	} else {
		newInput = currentDisplay;
		currentDisplay = operate();
		display.textContent = currentDisplay;
		oldInput = currentDisplay;
		currentDisplay = 0;
	}
});

pressClear.addEventListener("click", () => {
	oldInput = 0;
	newInput = "";
	operation = "";
	currentDisplay = "0";
	operatorCount = 0;
	display.textContent = currentDisplay || "0";
});