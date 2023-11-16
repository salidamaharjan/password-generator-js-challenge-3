// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//Creating generatePassword function
function generatePassword () {
  //capturing the user input in a variable.
  var userInput =  prompt("Create password? Select number between 8 and 128.");
  //if condition to check the userInput less than 8 and greater than 128 and executing the alert accordingly.
  if ( userInput < 8 ) {
    alert("Please select a number greater than 8!!");
  }
  if (userInput > 128 ) {
    alert("Please select a number less than 128!!");
  }
//Giving option to the user to include the given characters
  var includeNum = confirm("Do you want to include number?");
  var includeSpecialChar = confirm("Do you want to include special character?");
  var includeUpperCase = confirm("Do you want to include upper case letter?");
  var includesLowerCase = confirm("Do you want to include lower case letter?");
  return null;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// returns string

