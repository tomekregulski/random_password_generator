// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerSet = "abcdefghijklmnopqrstuvwxyz";
var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numSet = "0123456789";
var specialSet = "!@#$%^&*";
var newPassword = [];
// var password = generatePassword();


// Write password to the #password input


// make it wait for click //
generateBtn.addEventListener("click",function () {
  // function generatePassword() {
    var newPassword = [];
    var passwordLength = prompt("How many characters would you like your password to be? Please eanter a number between 8 and 128");
    var lowCase = confirm("Would you like your password to include lowercase letters?");
      console.log(lowCase);
      var upCase = confirm("Would you like your password to include uppercase letters?");
      console.log(upCase);
      var numbers = confirm("Would you like your password to include numbers?");
      console.log(numbers);
      var specialChars = confirm("Would you like your password to include special characters?");
      console.log(specialChars);
      var passwordSet = "";
  
  
      if (lowCase) { 
        passwordSet = lowerSet;
        // console.log(passwordSet); 
      }
  
      if (upCase) {
        passwordSet = passwordSet + upperSet;
        // console.log(passwordSet);
      }
  
      if (numbers) {
        passwordSet = passwordSet + numSet;
        // console.log(passwordSet);
      }
  
      if (specialChars) {
        passwordSet = passwordSet + specialSet;
      // console.log(passwordSet);
      }

      console.log(passwordLength);
      for ( var i = 0; i < passwordLength; i++ ) {
        newPassword += passwordSet[Math.floor(Math.random() * passwordSet.length)];
    }
  
    console.log(newPassword);
    var passwordText = document.querySelector("#password");
      passwordText.value = newPassword;
  });
// Starter code - figure out how to hook it all up to this
//   var password = writePassword()
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;



// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
