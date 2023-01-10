var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function getPasswordOptions() {
  // Choose length of password
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  // Confirm that password length is a numbre
  if (isNaN(length) === true) {
    alert('Password length must be a number');
    return;
  }

  // Password length to be more than 10 characters
  if (length < 10) {
    alert('Password must be more than 10 characters');
    return;
  }

  // Password length to be less than 64 characters
  if (length > 64) {
    alert('Password must be less than 64 characters');
    return;
  }


  // Check/confirm special characters have been included
  var includeSpecialCharacters = confirm(
    'Click OK to confirm that special characters will be included.'
  );

  // Check/confirm numeric characters have been included
  var includeNumericCharacters = confirm(
    'Click OK to confirm that numeric characters will be included.'
  );

  // Check/confirm lowercase characters have been included
  var includedLowerCaseCharacters = confirm(
    'Click OK to confirm that lowercase character will be included.'
  );

  // Check/confirm uppercase characters have been included
  var includedUpperCaseCharacters = confirm(
    'Click OK to confirm that uppercase characters will be included.'
  );

  // Check if a type of character (as above) have been included - alert if not included
  if (
    includeSpecialCharacters === false &&
    includeNumericCharacters === false &&
    includedLowerCaseCharacters === false &&
    includedUpperCaseCharacters === false
  ) {
    alert('Please choose one character type');
    return;
  }

  var passwordOptions = {
    length: length,
    includeSpecialCharacters: includeSpecialCharacters,
    includeNumericCharacters: includeNumericCharacters,
    includedLowerCaseCharacters: includedLowerCaseCharacters,
    includedUpperCaseCharacters: includedUpperCaseCharacters
  };

  return passwordOptions;
}


function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Generate password
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  // Include special character
  if (options.includeSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // Include numeric character
  if (options.includeNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  // Include lowercase character
  if (options.includedLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  // Include uppercase character
  if (options.includedUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  // Include one of each of the special charaters
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  return result.join('');
}
var generateBtn = document.querySelector('#generate');
function writePassword() { // Shows generated password
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


generateBtn.addEventListener('click', writePassword); // Add button