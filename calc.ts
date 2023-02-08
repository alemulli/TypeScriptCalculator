//////////////////// DOM Elements ////////////////////

const button1 = document.getElementById("1") as HTMLButtonElement;
const button2 = document.getElementById("2") as HTMLButtonElement;
const button3 = document.getElementById("3") as HTMLButtonElement;
const button4 = document.getElementById("4") as HTMLButtonElement;
const button5 = document.getElementById("5") as HTMLButtonElement;
const button6 = document.getElementById("6") as HTMLButtonElement;
const button7 = document.getElementById("7") as HTMLButtonElement;
const button8 = document.getElementById("8") as HTMLButtonElement;
const button9 = document.getElementById("9") as HTMLButtonElement;
const button0 = document.getElementById("0") as HTMLButtonElement;
const buttonDecimal = document.getElementById("decimal") as HTMLButtonElement;
const buttonAdd = document.getElementById("add") as HTMLButtonElement;
const buttonSubtract = document.getElementById("subtract") as HTMLButtonElement;
const buttonMultiply = document.getElementById("multiply") as HTMLButtonElement;
const buttonDivide = document.getElementById("divide") as HTMLButtonElement;
const buttonEquals = document.getElementById("equals") as HTMLButtonElement;
const display = document.getElementById("display") as HTMLElement;
const buttonClear = document.getElementById("clear") as HTMLButtonElement;
const buttonClearAll = document.getElementById("clearAll") as HTMLButtonElement;

//////////////////// Global Variables ////////////////////

let value1: number | undefined;
let value2: number | undefined;
let operation: string | undefined;

//////////////////// Putting the numbers into the display ////////////////////

function concatNumToDisplay(appendedNumber: string) {
  const currentDisplay: string = display.innerText;

  if (currentDisplay === "0") {
    display.innerText = appendedNumber;
  } else {
    display.innerText = currentDisplay + appendedNumber;
  }
}

button1.addEventListener("click", function () {
  if (display.innerText === "ERROR") {
    display.innerText = "ERROR";
  } else {
    concatNumToDisplay(button1.value);
  }
});

button2.addEventListener("click", function () {
  if (display.innerText === "ERROR") {
    display.innerText = "ERROR";
  } else {
    concatNumToDisplay(button2.value);
  }
});

button3.addEventListener("click", function () {
  concatNumToDisplay(button3.value);
});

button4.addEventListener("click", function () {
  if (display.innerText === "ERROR") {
    display.innerText = "ERROR";
  } else {
    concatNumToDisplay(button4.value);
  }
});

button5.addEventListener("click", function () {
  if (display.innerText === "ERROR") {
    display.innerText = "ERROR";
  } else {
    concatNumToDisplay(button5.value);
  }
});

button6.addEventListener("click", function () {
  if (display.innerText === "ERROR") {
    display.innerText = "ERROR";
  } else {
    concatNumToDisplay(button6.value);
  }
});

button7.addEventListener("click", function () {
  if (display.innerText === "ERROR") {
    display.innerText = "ERROR";
  } else {
    concatNumToDisplay(button7.value);
  }
});

button8.addEventListener("click", function () {
  if (display.innerText === "ERROR") {
    display.innerText = "ERROR";
  } else {
    concatNumToDisplay(button8.value);
  }
});

button9.addEventListener("click", function () {
  if (display.innerText === "ERROR") {
    display.innerText = "ERROR";
  } else {
    concatNumToDisplay(button9.value);
  }
});

button0.addEventListener("click", function () {
  if (display.innerText === "ERROR") {
    display.innerText = "ERROR";
  } else {
    concatNumToDisplay(button0.value);
  }
});


// decimal button display 0. if decimal is hit before any other number to avoid resulting in errors
// if the decimal button is hit twice in a row resulting in "0.." it throws an error
// if a decimal already exists within the displays string it throws an error

buttonDecimal.addEventListener("click", function () {
  if (display.innerText === "ERROR") {
    display.innerText = "ERROR";
  } else if (display.innerText.includes(".")) {
    display.innerText = "ERROR"
  } else {
    if (display.innerText === "0") {
      concatNumToDisplay("0.");
    } else {
      concatNumToDisplay(buttonDecimal.value);
    }
  }
});

//////////////////// Clear Display ////////////////////

function clear() {
  display.innerText = "0";
}

buttonClear.addEventListener("click", function () {
  clear();
});

//////////////////// Clear All ////////////////////

function clearAll() {
  display.innerText = "0";
  console.log(value1, value2, operation);
  value1 = undefined;
  value2 = undefined;
  operation = undefined;
  console.log(value1, value2, operation);
}

buttonClearAll.addEventListener("click", function () {
  clearAll();
});

//////////////////// Operations ////////////////////

function setOperation(clickedOperation: string) {
  operation = clickedOperation;
}

// storeValue1 also updates value1 if the user is performing a second operation as opposed to hitting the equals button after inputing a second value.
// this function also checks to see if they have tried to perform an operation on "-" with no number, if so it will return error
function storeValue1() {
  if (value1 === 0 || value1 === undefined) {
    value1 = +display.innerText;
  } else if (operation === "add") {
    value1 += +display.innerText;
  } else if (operation === "subtract") {
    value1 -= +display.innerText;
  } else if (operation === "multiply") {
    value1 = value1 * +display.innerText;
  } else {
    value1 = value1 / +display.innerText;
  }
}

buttonAdd.addEventListener("click", function () {
  if (display.innerText === "-" || display.innerText === "ERROR") {
    display.innerText = "ERROR";
  } else {
    setOperation(buttonAdd.value);
    storeValue1();
    clear();
  }
});

// subtract button puts a negative symbol in the display to make a number negative if the display is currently 0

buttonSubtract.addEventListener("click", function () {
  if (display.innerText === "-" || display.innerText === "ERROR") {
    display.innerText = "ERROR";
  } else {
    if (display.innerText === "0") {
      concatNumToDisplay("-");
    } else {
      setOperation(buttonSubtract.value);
      storeValue1();
      clear();
    }
  }
});

buttonMultiply.addEventListener("click", function () {
  if (display.innerText === "-" || display.innerText === "ERROR") {
    display.innerText = "ERROR";
  } else {
    setOperation(buttonMultiply.value);
    storeValue1();
    clear();
  }
});

buttonDivide.addEventListener("click", function () {
  if (display.innerText === "-" || display.innerText === "ERROR") {
    display.innerText = "ERROR";
  } else {
    setOperation(buttonDivide.value);
    storeValue1();
    clear();
  }
});

//what's left - calculate and return the result upon hitting the equals button (ifs for if there is only a value 1 input)(clear value1 value2 and operator, but user can still use an operator from here to perform an opertation on the result of the previous calculation),  css styling
