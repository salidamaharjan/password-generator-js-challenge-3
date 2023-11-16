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
  //capturing the user input in a variable.
  var userInput =  prompt("Create password? Select number between 8 and 128.");
  if ( userInput < 8 ) {
    alert("Please select a number greater than 8!!");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// returns string

