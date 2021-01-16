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
            const val = foo.textContent;
            if (!isNaN(val) || val == ".") { //if foo is a number or "."
                if (display.textContent == output.result) {
                    display.textContent = "";
                }
                display.textContent += val;
            } else if (val == "+" || val == "-" || val == "*" || val == "/" || val == "=") {

                //Set operand1 to display text
                if (display.textContent.includes(".")) {
                    output.operand1 = parseFloat(display.textContent);
                } else {
                    output.operand1 = parseInt(display.textContent);
                }

                //calculate current result
                if (output.result == null) {
                    output.result = output.operand1;
                } else {
                    output.operand1 = operate(output.result, output.operand1, output.operation);
                    output.result = output.operand1;
                    display.textContent = output.result;
                }
                console.log(`operand1 = ${output.operand1}`);
                console.log(`operation = ${output.operation}`);
                console.log(`result = ${output.result}`);

                //store operation
                if (val != "=") { output.operation = val; }

                if (val == "=") {
                    display.textContent = output.result;
                    output.operand1 = output.result;
                    output.result = null;
                }


            }
            // if (foo.textContent == "=") {
            //     output.result = operate(output.result, output.operand1, output.operation);
            //     console.log(`operand1 = ${output.operand1}`);
            //     console.log(`operation = ${output.operation}`);
            //     console.log(`result = ${output.result}`);
            //     display.textContent = output.result;
            // }

            if (foo.textContent == "AC") {
                output.operand1 = null;
                output.operation = "";
                output.result = null;
                display.textContent = "";
            }
        });
    });

}
populateGrid();

let output = {
    operand1: null,
    operation: "",
    result: null,
}