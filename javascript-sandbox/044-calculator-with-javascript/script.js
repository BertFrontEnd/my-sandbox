const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation');
const equalsButton = document.querySelectorAll('[data-equals');
const deleteButton = document.querySelectorAll('[data-delete');
const allClearButton = document.querySelectorAll('[data-all-clear');
const previousOperandText = document.querySelectorAll('[data-previous-operand');
const currentOperandText = document.querySelectorAll('[data-current-operand');

class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
  }

  clear() {}

  delete() {}

  appendNumber(number) {}

  chooseOperation(operation) {}

  updateDisplay() {}
}
