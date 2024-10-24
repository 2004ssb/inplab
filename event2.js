let currentInput = '';
let operator = '';
let firstOperand = null;

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.dataset.value;

        if (value === 'C') {
            clearCalculator();
        } else if (value === '=') {
            calculate();
        } else {
            handleInput(value);
        }
    });
});

// Handle numeric and operator input
function handleInput(value) {
    if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput) {
            firstOperand = parseFloat(currentInput);
            operator = value;
            currentInput = '';
        }
    } else {
        currentInput += value;
    }
    updateDisplay();
}

// Calculate the result
function calculate() {
    if (firstOperand !== null && currentInput) {
        const secondOperand = parseFloat(currentInput);
        let result;
        
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            default:
                return;
        }
        
        currentInput = result.toString();
        firstOperand = null; // Reset for next calculation
        operator = '';
    }
    updateDisplay();
}

// Clear the calculator
function clearCalculator() {
    currentInput = '';
    firstOperand = null;
    operator = '';
    updateDisplay();
}

// Update the display
function updateDisplay() {
    document.getElementById('result').value = currentInput;
}
