// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//Creating generatePassword function;
function generatePassword () {
  prompt("Create password? Select number between 8 and 128.");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// returns string

