// create a variable that stores the ID 'generate' which is the submit button
var generateBtn = document.querySelector("#generate");
var textArea = document.querySelector("#password");
//initializing the new password array

// Prompt user for options and store answers in variables to use later
var passwordLength = window.prompt("How many characters would you like to use?");
var lowerCase = window.prompt("Would you like to include lower case letters?");
var upperCase = window.prompt("Would you like to include upper case letters?");
var numbers = window.prompt("Would you like to include numbers?");
var symbols = window.prompt("Would you like to include symbols?");

// var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@!$%^&*()_+";

// set ascii codes for lowercase, upper, numbers and symbols
var asciiUpper = asciiCodeArray(65, 90);
var asciiLower = asciiCodeArray(97, 122);
var asciiNumbers = asciiCodeArray(48, 57);
var asciiSymbols = asciiCodeArray(35, 43);
const asciiArray = [];
// function that takes in the arguments set above to
function asciiCodeArray (low, high) {
  const asciiArray = [];
  for (var i = low; i <= high; i++) {
    if (lowerCase = true) {
      asciiArray.push(i);
    }
    if (upperCase = true) {
      asciiArray.push(i)
    } 
    if (numbers = true) {
      asciiArray.push(i);
    }
    if (symbols = true) {
      asciiArray.push(i);
    }
  }
  return asciiArray; 
}
var charCount = passwordLength;
var includeUpper = upperCase;
var includeLower = lowerCase.value;
var includeNumbers = numbers.value;
var includeSymbols = symbols.value;

// Add event listener to Generate Password button
// When button is clicked, the function generatePassword is called
generateBtn.addEventListener("click", function(event) {
  event.preventDefault();

  var password = function generatePassword (charCount, asciiArray) {
    const newPassword = [];
    for (var i = 0; i < charCount; i++) {
      const asciiSelector = asciiArray[Math.floor(Math.random() * charCount)]
      newPassword.push(String.fromCharCode(asciiSelector));
  }
  return newPassword.join('');
  }
  textArea.innerText = "newPassword";
  })

// make a function that uses all the input and spits out a random string of chars
// function generatePassword(charCount, asciiArray) {
//   const newPassword = [];
//   for (var i = 0; i < charCount; i++) {
//       const asciiSelector = asciiArray[Math.floor(Math.random() * charCount)]
//       newPassword.push(String.fromCharCode(asciiSelector));
//   }
//   return newPassword.join('');
//}




