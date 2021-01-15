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

// Populate the grid
function populateGrid() {
    const grid = document.querySelector(".grid");
    for (let i = 1; i <= 9; i++) {
        const item = document.createElement('div');
        item.classList.add("item");
        item.textContent = i;
        grid.appendChild(item);
    }
    const operations = ["+", "-", "*", "/", "=", "AC"]
    operations.forEach(operation => {
        const symbol = document.createElement('div');
        symbol.classList.add("item");
        symbol.textContent = operation;
        grid.appendChild(symbol);
    });
}
populateGrid();