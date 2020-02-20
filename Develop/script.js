// Assignment Code
var generateBtn = document.querySelector("#generate");

var capitalCase = ("ABCDEFGKIJKLMNOPQRSTUVWXYZ");
var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
var numbers = ("0123456789");
var specialCharacters = ("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function myFunction () {
  // getting length of password via ID
  var passwordLength = document.getElementById("quantity");
  //defining "getting" check boxes
  var capitalCheck = document.getElementById("capitalSelect");
  var lowercaseCheck = document.getElementById("lowercaseSelect");
  var numberCheck = document.getElementById("numberSelect");
  var specialCharacterCheck = document.getElementById("specialCharacterSelect");
}

if (capitalCheck.checked && lowercaseCheck.checked && numberCheck && specialCharacterCheck === true  ) {
for (i = 0; i < quantity; i++)
var lettersGen = [Math.floor(Math.random()*letters.length)];
}

alert(letterGen)
