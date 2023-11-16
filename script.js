// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//Creating generatePassword function
function generatePassword() {
  //capturing the user input in a variable.
  var userInput = prompt("Create password? Select number between 8 and 128.");
  //if condition to check the userInput less than 8 and greater than 128 and executing the alert accordingly.
  if (userInput < 8) {
    alert("Please select a number greater than 8!!");
  }
  if (userInput > 128) {
    alert("Please select a number less than 128!!");
  }
  //Giving option to the user to include the given characters
  var includeNum = confirm("Do you want to include number?");
  var includeSpecialChar = confirm("Do you want to include special character?");
  var includeUpperCase = confirm("Do you want to include upper case letter?");
  var includesLowerCase = confirm("Do you want to include lower case letter?");
  //creating an empty variable to add the character according to the user response
  var setOfChars = "";
  //creating variables to store different characters
  var num = "012";
  var specialChar = "!@#";
  var upperCase = "ABC";
  var lowerCase = "abc";
  // checking if the user selects the given option as a true value and adding it to the setOfChars according to the user response
  if (includeNum) {
    setOfChars += num;
  }
  if (includeSpecialChar) {
    setOfChars += specialChar;
  }
  if (includeUpperCase) {
    setOfChars += upperCase;
  }
  if (includesLowerCase) {
    setOfChars += lowerCase;
  }
  //creating variable  with empty string
  var newPassword = "";
  for (var i = 0; i < userInput; i ++) {
    
  }
  
 
  return null;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// returns string
