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


//////////////////// Putting the numbers into the display ////////////////////

function concatNumToDisplay(appendedNumber: string) {
  const currentDisplay: string = display.innerText;
  console.log(currentDisplay);

  if (currentDisplay === "0") {
    display.innerText = appendedNumber;
  } else {
    display.innerText = currentDisplay + appendedNumber;
  }
}

button1.addEventListener("click", function () {
  concatNumToDisplay(button1.value);
});

button2.addEventListener("click", function () {
  concatNumToDisplay(button2.value);
});

button3.addEventListener("click", function () {
  concatNumToDisplay(button3.value);
});

button4.addEventListener("click", function () {
  concatNumToDisplay(button4.value);
});

button5.addEventListener("click", function () {
  concatNumToDisplay(button5.value);
});

button6.addEventListener("click", function () {
  concatNumToDisplay(button6.value);
});

button7.addEventListener("click", function () {
  concatNumToDisplay(button7.value);
});

button8.addEventListener("click", function () {
  concatNumToDisplay(button8.value);
});

button9.addEventListener("click", function () {
  concatNumToDisplay(button9.value);
});

button0.addEventListener("click", function () {
  concatNumToDisplay(button0.value);
});

buttonDecimal.addEventListener("click", function () {
  concatNumToDisplay(buttonDecimal.value);
});

//////////////////// Clear Display ////////////////////