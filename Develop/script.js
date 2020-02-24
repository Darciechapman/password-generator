// refering to the IDs in html
const resultEl = document.getElementById('password');
const generateEl = document.getElementById('generate');

// putting random functions together and defining them
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol 
};


// Generate event listener (once generateEl ie the generate button in html, is clicked then run these)
generateEl.addEventListener('click', () => {

var length = prompt("how long would you like your password? (choose a number between 8-128");

alert("for the next 4 options, you must choose at least one for a password to generate");

var hasUpper = confirm("Would you like capital letter?");

var hasLower = confirm("Any lower case?");

var hasNumber = confirm("would you like numbers?");

var hasSymbol = confirm("would you like special characters?");


  resultEl.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol,
    length
    );
});

//generate password function
function generatePassword(lower, upper, number, symbol, length) {
  // 1. init password var 
  // 2. Filter out unchecked types 
  // 3. Loop over length call generator function for each type
  // 4. Add final password to the password var 

  let generatedPassword = '';

  const typesCount = lower + upper + number + symbol;

  //console.log('typesCount: ', typesCount);

  const typesArr = [{ lower },  { upper }, { number }, { symbol }].filter
  (
  item => Object.values(item) [0]
  ); 

  //console.log("typesarr: ", typesArr);

  if(typesCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type) [0];

      //console.log('funcName: ', funcName);

      generatedPassword += randomFunc[funcName]();

    });

  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword; 
}

// generator functions - http://www.net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}




