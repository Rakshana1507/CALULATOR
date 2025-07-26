let display = document.getElementById('display');
let currentInput = '';

function appendNumber(num) {
  if (currentInput === '0' && num !== '.') {
    currentInput = '';
  }
  currentInput += num;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === '') return;
  const lastChar = currentInput.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) return;
  currentInput += op;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay('0');
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === '') {
    updateDisplay('0');
  } else {
    updateDisplay();
  }
}

function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (e) {
    updateDisplay('Error');
    currentInput = '';
  }
}

function updateDisplay(value) {
  display.textContent = value !== undefined ? value : currentInput;
}
