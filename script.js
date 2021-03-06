//special chars array
var charArray = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  "<",
  ">",
  "=",
  "?",
  "@",
  "~",
];

var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var upperArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowerArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var newArray = [];
var finalArray = [];
var passwordText = document.querySelector("#password");

//function to get a random index number in an array.
function randomIndex(array) {
  var randElement = Math.floor(Math.random() * array.length);
  return randElement;
}
//function that takes in an array and a chosen length(int) as arguments,
// and pushes a new random array of that length to the variable array 'newArray'
var randomArray = function (array, passLength) {
  for (i = 0; i < passLength; i++) {
    newArray.push(array[randomIndex(array)]);
  }
  console.log(newArray);
};
//function for final array of chosen length taken out of a larger array constructed with user input.
var randomFinalArray = function (array, passLength) {
  for (i = 0; i < passLength; i++) {
    finalArray.push(array[randomIndex(array)]);
  }
  return finalArray;
};

// Get references to the #generate element, the BUTTON.
var generateBtn = document.querySelector("#generate");

// Write password to the #password(text area) input
function writePassword() {
  finalArray = [];
  newArray = [];

  function generatePassword() {
    var passLength = window.prompt(
      "How long do you want your password to be? Type a number here between 8 and 128"
    );
    if (passLength < 8 || passLength > 128) {
      window.alert("You must choose a value between 8 and 128.");
      return generatePassword();
    } else {
      passLength = parseInt(passLength); //this works to set value to integer.

      window.alert(
        "You will first choose at least one of the following: SPECIAL CHARACTERS, NUMBERS, LOWER CASE and UPPER CASE letters"
      );
      var isSpChars = window.confirm(
        "Do you want to use special characters(ie, *,&,%,$) ?"
      );

      if (!isSpChars) {
        var confSpChar = window.confirm(
          "Are you sure you don't want to include special characters?"
        );
        if (!confSpChar) {
          window.alert("special characters will be used");
          randomArray(charArray, passLength);
        }
      } else {
        randomArray(charArray, passLength);
      }

      var isNums = window.confirm("Do you want to use numbers?");
      if (!isNums) {
        var confNums = window.confirm(
          "Are you sure you don't want to include numbers?"
        );
        if (!confNums) {
          window.alert("Numbers will be used");
          randomArray(numArray, passLength);
        }
      } else {
        randomArray(numArray, passLength);
      }

      var isLowers = window.confirm("Do you want to use lower case letters?");
      if (!isLowers) {
        var confNums = window.confirm(
          "Are you sure you don't want to include lower case letters?"
        );
        if (!confNums) {
          window.alert("lower case letters will be used");
          randomArray(lowerArray, passLength);
        }
      } else {
        randomArray(lowerArray, passLength);
      }

      var isUppers = window.confirm("Do you want to use upper case letters?");
      if (!isUppers) {
        var confUpper = window.confirm(
          "Are you sure you don't want to include upper case letters?"
        );
        if (!confUpper) {
          window.alert("Upper case letters will be used");
          randomArray(upperArray, passLength);
        }
      } else {
        randomArray(upperArray, passLength);
      }

      console.log(newArray);
      finalArray = randomFinalArray(newArray, passLength);

      finalArray = finalArray.join("");

      console.log(finalArray);
      return finalArray;
    }
  }
  var password = generatePassword();
  // then take the choices made above and put into the text area in the HTML

  //the value of the function generatePassword set to 'password' and placed in text box.
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
