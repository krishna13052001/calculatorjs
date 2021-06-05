const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const reminderBtn = document.getElementById('btn-reminder');
const powerBtn = document.getElementById('btn-power');
const clearBtn = document.getElementById('btn-clear');
const roundBtn = document.getElementById('btn-round');
const logBtn = document.getElementById('btn-log');
const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
