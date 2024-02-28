document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector('input[name="display"]');

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function addOperator(operator) {
        appendToDisplay(operator);
    }

    function calculateResult() {
        display.value = eval(display.value);
    }

});