
//special chars array
//
var charArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-"];//, "<", ">", "=", "?", "@", "~", //index 0

var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // index 1

var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
//, "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", //index 2

var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
//, "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"// index 3


// a randomized order or the password array is final array value of the #password text area
// var uniquePass = [];
// uniquePass.push

function randomIndex(array) {
  randElement = Math.floor(Math.random() * array.length);
  return randElement;
}

// debugger;
function generatePassword() {
  var passLength = window.prompt("How long do you want your password to be? Type a number here between 8 and 128");
  if (passLength < 8 || passLength > 128) {
    window.alert("You must choose a value between 8 and 128.");
    generatePassword();
  }


  else {
    passLength = parseInt(passLength); //this works to set value to integer.

    window.alert("You will need to choose at least one of the following: special characters, numbers, lower case letters, upper case letters");

    var isSpChars = window.confirm("Do you want to use special characters(ie, *,&,%,$) ?");

    if (isSpChars) {
      var charStr = " ";
      for (i = 0; i <= passLength; i++) {
        charStr += charArray[randomIndex(charArray)];
      }
      newArray = (charStr.split(""));
      console.log(newArray);
      return newArray;
    }

  }
  // Math.floor(Math.random * passArray[1].length)

  var isNums = window.confirm("Do you want to use numbers?");
  if (isNums) {
    return;

  }


  var isLowers = window.confirm("Do you want to use lower case letters?");
  if (isLowers) {

  }

  var isUppers = window.confirm("Do you want to use upper case letters?");
  if (isUppers) {

  }






  //   return uniquePass;// 
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

var charArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-"];//, "<", ">", "=", "?", "@", "~", //index 0

var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // index 1

var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
//, "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", //index 2

var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
//, "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"// index 3
generatePassword();
