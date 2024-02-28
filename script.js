document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector('input[name="display"]');

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function add() {
        appendToDisplay('+');
    }

    function subtract() {
        appendToDisplay('-');
    }

    function multiply() {
        appendToDisplay('*');
    }

    function divide() {
        appendToDisplay('/');
    }

    function calculateResult() {
        display.value = eval(display.value);
    }

    document.getElementById('operator-ac').addEventListener('click', clearDisplay);
    document.getElementById('operator-del').addEventListener('click', function () {
        display.value = display.value.slice(0, -1);
    });
    document.getElementById('operator-dot').addEventListener('click', function () {
        appendToDisplay('.');
    });
    document.getElementById('operator-divide').addEventListener('click', divide);
    document.getElementById('operator-multiply').addEventListener('click', multiply);
    document.getElementById('operator-subtract').addEventListener('click', subtract);
    document.getElementById('operator-add').addEventListener('click', add);
    document.getElementById('operator-equal').addEventListener('click', calculateResult);

    const numberButtons = ['00', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    numberButtons.forEach((number) => {
        document
            .getElementById(`number-${number}`)
            .addEventListener('click', function () {
                appendToDisplay(number);
            });
    });
});