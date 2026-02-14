const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';

}

function calculate() {
    try {
    display.value = eval(display.value);
}
catch (error) { 
    display.value = 'Error';
}
}

function deleteOne() {
  display.value = display.value.slice(0, -1);
}

function toggleSign() {
  if (display.value && display.value !== '0') {
    display.value = display.value * -1;
  }
}