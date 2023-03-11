//Variables

var generateBtn = document.querySelector("#generate");

var lowercaseLettters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var UpperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var Symbols = " !#$%&'()*+,-]./:;<=>?@[^_`|}{~";
var SymbolsArray = Symbols.split("");

//function to get random Index
function getRandomIndex(arr = []) {
  var index = arr[Math.floor(Math.random() * arr.length)];
  return index;
}

//Prompts from window
function passwordPrompts() {
  var lengthPrompt = window.prompt("How long would you like this password to be?");
  var hasLowerCase = window.confirm("Would you like to have lowercase Letters?");
  var hasUpperCase = window.confirm("Would you like to have Uppercase Letters?");
  var hasNumbers = window.confirm("Would you like to have Numbers?");
  var hasSymbols = window.confirm("Would you like to have Symbols?");
  var parsedLength = Number.parseInt(lengthPrompt);
  
  //Check Criteria
  if (Number.isNaN(parsedLength)) {
    console.log("Input length is not a number", lengthPrompt, parsedLength);
    window.alert("Enter valid length Entry");
    return null;
    
  }

  if (parsedLength < 8 || parsedLength > 128) {
    console.log("Invalid Input Length! Must be 8 to 128", lengthPrompt, parsedLength);
    window.alert("Invalid Input Length! Length must be between 8 and 128");
    return null;
    
  }

  if (!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSymbols) {
    console.log("Answer no to all confirms");
    window.alert("Cannot build password Answered no to all confirms");
    return null;
    
  }
  
  return {
    lengthPrompt,
    hasLowerCase,
    hasUpperCase,
    hasNumbers,
    hasSymbols
  }
}

//Function to generate password
function generatePassword(){
  var result = [];
  var chars = [];
  var prompts = passwordPrompts();

  if (prompts.hasLowerCase) {
    chars = chars.concat(lowercaseLettters);
    console.log(chars);
  }
  
  if (prompts.hasUpperCase) {
    chars = chars.concat(UpperCaseLetters);
    console.log(chars);
  }

  if (prompts.hasNumbers) {
    chars = chars.concat(Numbers);
    console.log(chars);
  }

  if (prompts.hasSymbols) {
    chars = chars.concat(SymbolsArray);
    console.log(chars);
  }

  
  for (let i = 0; i < prompts.lengthPrompt; i++) {
    const element = getRandomIndex(chars);
    result.push(element);
    console.log(element);
  }
  console.log(result);

  return result.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
