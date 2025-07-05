const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equalBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    expression += button.dataset.value;
    display.value = expression;
  });
});

equalBtn.addEventListener("click", () => {
  try {
    expression = eval(expression).toString();
    display.value = expression;
  } catch {
    display.value = "Error";
    expression = "";
  }
});

clearBtn.addEventListener("click", () => {
  expression = "";
  display.value = "";
});

document.addEventListener("keydown", (e) => {
  if ((e.key >= "0" && e.key <= "9") || "+-*/.".includes(e.key)) {
    expression += e.key;
    display.value = expression;
  } else if (e.key === "Enter") {
    try {
      expression = eval(expression).toString();
      display.value = expression;
    } catch {
      display.value = "Error";
      expression = "";
    }
  } else if (e.key === "Backspace") {
    expression = expression.slice(0, -1);
    display.value = expression;
  }
});
