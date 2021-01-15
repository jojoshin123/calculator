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
    const items = ["", "", "", "AC", 7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "=", "+"];
    items.forEach(item => {
        const foo = document.createElement('div');
        foo.classList.add("item");
        foo.textContent = item;
        grid.appendChild(foo);
        foo.addEventListener('click', () => {
            const display = document.querySelector(".display");
            if (foo.textContent == "AC") {
                output.displayString = "";
            } else if (foo.textContent == "=") {
                output.displayString = "result";
            } else {
                output.displayString += foo.textContent;
            }
            display.textContent = output.displayString;
        });
    });

}
populateGrid();

let output = {
    displayString: "",
    result: "",
}