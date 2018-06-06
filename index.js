// variables

var textInput = document.querySelector('.enter-your-guess');
var submitButton = document.querySelector('.check-guess ');
var clearButton = document.querySelector('.clear-button');
var textDisplay = document.querySelector('.your-last-guess');
var resetButton = document.querySelector('.reset-button');
var lowOrHi = document.querySelector('.lowOrHi');
var userGuess = document.querySelector('.user-guess');
var randomNumber = function() {
  return parseInt(Math.floor(Math.random() * 100 + 1));
}
var resultRandomNumber = randomNumber();
console.log(resultRandomNumber);

// event listener

textInput.addEventListener('keyup', buttonEnable);
submitButton.addEventListener('click', checkGuess);
clearButton.addEventListener('click', clearInputField);
resetButton.addEventListener('click', resetGame);

// function

function checkGuess(event) {
  event.preventDefault();
  userGuess.innerHTML = textInput.value;
  if (textInput.value > resultRandomNumber) {
    lowOrHi.innerText = 'That is too High';
  } else if (textInput.value < resultRandomNumber) {
    lowOrHi.innerText = 'That is too Low';
  } else { 
    lowOrHi.innerText = 'BOOM!';
  } 
  console.log(textInput.value, resultRandomNumber);
}

function clearInputField(event) {
  event.preventDefault();
  textInput.value = '';
}

function resetGame() {
  location.reload();
}

function buttonEnable() {
  submitButton.disabled = false;
  clearButton.disabled = false;
  resetButton.disabled = false;
}


