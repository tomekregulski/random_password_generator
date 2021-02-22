// Declare global variables
var generateBtn = document.querySelector("#generate");
var lowerSet = "abcdefghijklmnopqrstuvwxyz";
var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numSet = "0123456789";
var specialSet = "!()?[]`~;:!@#$%^&*+=";


// Write password to the #password input
function generatePassword() {
  var password = [];
// Prompt user to input parameters for password generation
  var passwordLength = prompt("How many characters would you like your password to be? Please enter a number between 8 and 128");
    if (passwordLength === null) {
      return ("");
    }
// catch instances of invalid entry
    if (passwordLength < 8 || passwordLength > 128 || isNaN(parseInt(passwordLength))) {
      alert("Please choose a number between 8 and 128 characters.")
      var tryAgain = confirm("Would you like to try again?");
      if (tryAgain) {
        generatePassword();
      } else {
        return ("");
      }
    } else {
      var lowCase = confirm("Would you like your password to include lowercase letters?");
      var upCase = confirm("Would you like your password to include uppercase letters?");
      var numbers = confirm("Would you like your password to include numbers?");
      var specialChars = confirm("Would you like your password to include special characters?");
// concat character strings based on parameters set by user
      var passwordSet = "";

        if (lowCase) { 
          passwordSet = lowerSet;
        }
        if (upCase) {
          passwordSet = passwordSet + upperSet;
        }
        if (numbers) {
          passwordSet = passwordSet + numSet;
        }
        if (specialChars) {
          passwordSet = passwordSet + specialSet;
        }
// Ensure that user has selected at least one character set
        if (passwordSet === "" ) {
          alert("You must select at least one character set.")
          return ("");
        } else {
// Loop through final character set and select random characters, with number of iterations set to the user's desired length for the password.
        for ( var i = 0; i < passwordLength; i++ ) {
          password += passwordSet[Math.floor(Math.random() * passwordSet.length)];
        }
        // return password;
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
      }
    }
};

generateBtn.addEventListener("click", generatePassword);
