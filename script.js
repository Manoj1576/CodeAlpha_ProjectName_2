// Stores current expression
let expression = "";

function press(value) {

    // prevent operator at start
    if (expression === "" && ['+', '-', '*', '/'].includes(value)) {
        return;
    }

    let lastChar = expression.slice(-1);
    let operators = ['+', '-', '*', '/'];

    // prevent double operators
    if (operators.includes(value) && operators.includes(lastChar)) {
        return;
    }

    // decimal validation
    if (value === ".") {
        let parts = expression.split(/[\+\-\*\/]/);
        let currentNumber = parts[parts.length - 1];

        if (currentNumber.includes(".")) {
            return;
        }
    }

    expression = expression + value;
    document.getElementById("display").value = expression;
}

function calculate() {
    let result = eval(expression);
    document.getElementById("display").value = result;
    expression = result;
}

function clearDisplay() {
    expression = "";
    document.getElementById("display").value = "";
}

function backspace() {
    expression = expression.slice(0, -1);
    document.getElementById("display").value = expression;
}

// Keyboard support
document.addEventListener("keydown", function (event) {

    event.preventDefault();

    let key = event.key;

    // numbers
    if (key >= "0" && key <= "9") {
        press(key);
    }

    // operators
    if (["+", "-", "*", "/", "."].includes(key)) {
        press(key);
    }

    // Enter = calculate
    if (key === "Enter") {
        calculate();
    }

    // Backspace
    if (key === "Backspace") {
        backspace();
    }

    // Escape = clear
    if (key === "Escape") {
        clearDisplay();
    }
});
