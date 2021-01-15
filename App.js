function add(x, y) { return x + y }

function subtract(x, y) { return x - y }

function multiply(x, y) { return x * y }

function divide(x, y) { return x / y }

function operate(x, y, func) {
    switch (func) {
        case "+":
            return add(x, y);
            break;
        case "-":
            return subtract(x, y);
            break;
        case "x":
        case "*":
            return multiply(x, y);
            break;
        case "/":
            return divide(x, y);
            break;
        default:
            return "Invalid Function"
    }
}