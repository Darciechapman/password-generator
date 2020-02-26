PASSWORD GENERATER

On this project our objective was to create a random password generator. That follows the criteria chosen by the viewer. The password options are; length, capital letters, lowercase letters, numbers and symbols. These options will be prompted after the user clicks the generate password button. 

Creating criteria 

Length – getting value from prompt
Capital, lower case, number – referring to Browser Character Set
Special Characters – create string 

Functions 

Get random letter/number/symbol

Capital letter – 65 – 90 on browser character set

Math.random - generates random decimal ie 0.643538.., 0.935473..
Times by 26 because that’s the limit of choices we have in the alphabet 
Maths.floor – rounds down
65 – because that is where capital letters start on the browser character set

(Math.floor(Math.random() * 26) + 65); 

Returns a random integer from 0 – 26

Referencing Browser Character Set –

Return String.fromCharCode(Math.flo…  
Lower case letter -  97 – 122 on browser character set
Maths.random – grabs random decimal
Times 26 (the amount of letters in the alphabet cap)
Maths.floor – rounds down
+ 97 (where lower case starts)


Numbers – 48-57 on browser character set

Math.random – generate random decimal
Times by 10 – number of numbers we need 0123456789
Maths.floor – rounds down
+ 48 (where numbers start)
Symbol – create string

Define functions together into key – for easier reference 

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol 
};


Generate Password 
with (lower, upper, number, symbol, length) functions

define result name
let generateDpassword
let means it creates a variable that can not be referred too outside its bracket

const typeCount = lower + upper + numer + symbol;
creates an variable with all criteria

if typeCount = 0 
return nothing


filtering out if they’re not included in confirm criteria 

  const typesArr = [{ lower },  { upper }, { number }, { symbol }].filter
  (
  item => Object.values(item) [0]
  ); 



Loop over the length and refer to generate function we’ve just made

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type) [0];

      generatedPassword += randomFunc[funcName]();

    });

Let i = 0. If length is less then zero add typesCount (filtered array)
For each (high order loop) typesarr
Grabs them from typesarr gives us random keys the length of length chosen
Then referring result to generatedPassword 
Genpassword = genpassword + our functions all in one, and their length

Then we need to print finalpassword = generatedPassword
In our password text ID
From referring to resultEl.innerText = generatePassword(
Haslower, hasupper, hasnumber, hassymbol, length


  resultEl.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol,
    length
    );

See what happens
Needs to include question, confirms. 

Creating a length range limit.
If generated password length <8 or >128
Alert error.
ELSE return password innertext  


