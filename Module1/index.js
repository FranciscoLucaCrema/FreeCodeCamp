const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  const inputText = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedText = inputText.split("").reverse().join("");

  if (inputText === "") {
    alert("Please input a value");
  } else if (inputText === reversedText) {
    result.innerText = `${textInput.value} is a palindrome`;
  } else {
    result.innerText = `${textInput.value} is not a palindrome`;
  }
});
