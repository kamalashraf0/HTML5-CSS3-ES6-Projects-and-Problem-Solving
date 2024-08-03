
var currentInput = '';
var operator = '';
var firstOperand = '';
var secondOperand = '';

function EnterNumber(value) {
    currentInput += value;
    document.getElementById('Answer').value = currentInput;
}

function EnterOperator(op) {
    if (currentInput === '' && firstOperand === '') return;
    
    if (firstOperand === '') {
        firstOperand = currentInput;
    } else if (currentInput !== '') {
        secondOperand = currentInput;
        calculate();
        firstOperand = document.getElementById('Answer').value;
    }
    operator = op;
    currentInput = '';
}


function EnterEqual() {
    if (firstOperand === '' || currentInput === '') return;
    
    secondOperand = currentInput;
    calculate();
    firstOperand = document.getElementById('Answer').value;
    currentInput = '';
    operator = '';
}


function EnterClear() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    document.getElementById('Answer').value = '';
}


function calculate() {
    var result;
    var num1 = parseInt(firstOperand);
    var num2 = parseInt(secondOperand);
    
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'undefined';
            }
            break;
        default:
            result = 'Error';
            break;
    }
    
    document.getElementById('Answer').value = result;
}
