document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector('input[name="display"]');

  function appendToDisplay(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = "";
  }

  function addOperator(operator) {
    appendToDisplay(operator);
  }

  function calculateResult() {
    display.value = eval(display.value);
  }
  const numberButtons = [
    "00",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  numberButtons.forEach((number) => {
    document
      .getElementById(`number-${number}`)
      .addEventListener("click", function () {
        appendToDisplay(number);
      });
  });
});
