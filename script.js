// Assignment code here
//special chars array
var passArray = [
  ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "<", ">", "=", "?", "@", "~"], //index 0

  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // index 1

  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
    "W", "X", "Y", "Z"], //index 2

  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z"]// index 3

]

// this var uniquePass.join is value of the #password text area
var uniquePass = [];

var passLength = window.prompt("How long do you want your password to be? Type a number here between 8 and 128");
if (passLength < 8 || passLength > 128) {
  window.alert("You must choose a value between 8 and 128.");
  passLength();
}
else {

  function generatePassword() {
    window.alert("You will need to choose at least one of the following: special characters, numbers, lower case letters, upper case letters");

    var isSpChars = window.confirm("Do you want to use special characters(ie, *,&,%,$) ?");
    if (isSpChars)

      var isNums = window.confirm("Do you want to use numbers?");


    var isLowers = window.confirm("Do you want to use lower case letters?");


    var isUppers = window.confirm("Do you want to use upper case letters?");



  }
}

// Get references to the #generate element, the BUTTON.
var generateBtn = document.querySelector("#generate");


// Write password to the #password(text area) input
function writePassword() {
  //run the function to get the character array choices into array and for loop?
  var password = generatePassword();
  // then take the choices made above and put into the text area in the HTML?

  //references the password TEXT area
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
