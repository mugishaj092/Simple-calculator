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
  document
    .getElementById("operator-ac")
    .addEventListener("click", clearDisplay);
  document
    .getElementById("operator-del")
    .addEventListener("click", function () {
      display.value = display.value.slice(0, -1);
    });
  document
    .getElementById("operator-dot")
    .addEventListener("click", function () {
      appendToDisplay(".");
    });
  document
    .getElementById("operator-divide")
    .addEventListener("click", function () {
      addOperator("/");
    });
  document
    .getElementById("operator-multiply")
    .addEventListener("click", function () {
      addOperator("*");
    });
  document
    .getElementById("operator-subtract")
    .addEventListener("click", function () {
      addOperator("-");
    });
  document
    .getElementById("operator-add")
    .addEventListener("click", function () {
      addOperator("+");
    });
  document
    .getElementById("operator-equal")
    .addEventListener("click", calculateResult);
});
