let currentInput = '';
let operator = '';
let result = 0;

function appendValue(value) {
    currentInput += value;
    updateResult();
}

function setOperator(op) {
    operator = op;
    result = parseFloat(currentInput);
    currentInput = '';
}

function calculateResult() {
    if (operator === '+') {
        result += parseFloat(currentInput);
    } else if (operator === '-') {
        result -= parseFloat(currentInput);
    } else if (operator === '*') {
        result *= parseFloat(currentInput);
    } else if (operator === '/') {
        result /= parseFloat(currentInput);
    }

    currentInput = result.toString();
    operator = '';
    updateResult();
}

function clearResult() {
    currentInput = '';
    operator = '';
    result = 0;
    updateResult();
}

function updateResult() {
    document.getElementById('result').value = currentInput || '0';
}
