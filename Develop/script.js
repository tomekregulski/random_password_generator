// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerSet = "abcdefghijklmnopqrstuvwxyz";
var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numSet = "0123456789";
var specialSet = "!@#$%^&*";
var password = "";

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How many characters would you like your password to be? Please eanter a number between 8 and 128");
  console.log(passwordLength);
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
  };

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
  };
  console.log(passwordSet);

for ( var i = 0; i < passwordLength; i++ ) {
    password += passwordSet[Math.floor(Math.random() * passwordSet.length)];
}

console.log(password);
// console.log(password);
  // if (upCase) { console.log("uppercase") };
  // if (numbers) { console.log("numbers") };
  // if (specialChars) { console.log("special") };
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
