// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerSet = "abcdefghijklmnopqrstuvwxyz";
var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numSet = "0123456789";
var specialSet = "!()?[]`~;:!@#$%^&*+=";


// Write password to the #password input
function generatePassword() {
  var password = [];
  var passwordLength = prompt("How many characters would you like your password to be? Please enter a number between 8 and 128");
    if (passwordLength === null) {
      return ("");
    }
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

        if (passwordSet === "" ) {
          alert("You must select at least one character set.")
          return ("");
        } else {
        for ( var i = 0; i < passwordLength; i++ ) {
          password += passwordSet[Math.floor(Math.random() * passwordSet.length)];
        }
        // return password;
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
      }
    }
};

// function writePassword() {
//   var password = generatePassword()
  
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
