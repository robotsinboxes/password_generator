// create a variable that stores the ID 'generate' which is the submit button
var generateBtn = document.querySelector("#generate");
var textArea = document.querySelector("#password");
//initializing the new password array

// Prompt user for options and store answers in variables to use later
// var passwordLength = 
var passwordLength = parseInt(window.prompt("How many characters would you like to use?"));
if (passwordLength < 8 || passwordLength > 128) {
  alert('The password must be at least 8 characters and no more that 128 characters.');
  passwordLength = parseInt(prompt("How many characters would you like to use?"));
} 
var optLowerCase = confirm("Click OK to confirm using upper case letters.");
var optUpperCase = confirm("Click OK to confirm using lower case letters.");
var optNumbers = confirm("Click OK to confirm using numbers.");
var optSymbols = confirm("Click OK to confirm using symbols.");
console.log(optLowerCase, optUpperCase, optNumbers, optSymbols);

// create array of all value options
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '!@#$%^&*=-_';

// create an empty array to store random values
var characterOptions = [];
    
if (optLowerCase == true) {
  characterOptions.push(lowerCase);
}
if (optUpperCase == true) {
  characterOptions.push(upperCase);
}
if (optNumbers == true) {
  characterOptions.push(numbers);
}
if (optSymbols == true) {
  characterOptions.push(symbols);
}

var chars = characterOptions.join("");
var newPassword = ""; 

// Add event listener to getPassword button
// When button is clicked, the function generatePassword is called
generateBtn.addEventListener("click", function(event) {
    event.preventDefault();
    for (var i = 0; i < passwordLength; i++) {
      var passwordGenerator = chars[Math.floor(Math.random() * chars.length)]
      newPassword = newPassword.concat(passwordGenerator);
    } 
    textArea.innerText = newPassword;
})






