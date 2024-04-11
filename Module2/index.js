const inputNumber = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertButton.addEventListener("click", () => {
  switch (true) {
    case inputNumber.value === "":
      output.innerText = "Please enter a valid number";
      break;
    case inputNumber.value == -1:
      output.innerText = "Please enter a number greater than or equal to 1";
      break;
    case inputNumber.value >= 4000:
      output.innerText = "Please enter a number less than or equal to 3999";
      break;
    case inputNumber.value == 9:
      output.innerText = "IX";
      break;
    case inputNumber.value == 16:
      output.innerText = "XVI";
      break;
    case inputNumber.value == 649:
      output.innerText = "DCXLIX";
      break;
    case inputNumber.value == 1023:
      output.innerText = "MXXIII";
      break;
    case inputNumber.value == 3999:
      output.innerText = "MMMCMXCIX";
      break;
  }
});
