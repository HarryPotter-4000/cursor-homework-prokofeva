// 1 function with for...of
const getMaxDigit = function(number) {
  const digits = String(number);
  let result = digits[0];

  for (const digit of digits) {
    if (digit > result) {
      result = digit;
    }
  }
  return result;
}
// 1 function with for...
const getMaxOfDigits = function(number) {
  const numberToString = String(number);
  let result = numberToString[0];

  for (let i = 1; i < numberToString.length; i++) {
    if (result < numberToString[i]) {
      result = numberToString[i];
    }
  }
  return result;
}
// 2 
const getPowerOfNumber = (number, power) => {

  if (power === 0) {
    return  1;
  }

  let result = number;

  for (let i = 1; i < power; i++) {
    result *= number;
  }
  return result;
}

// 3 
function correctFirstName(name){
  const nameToLowerCase = name.toLowerCase();
  const firstLetter = nameToLowerCase[0].toUpperCase();
  const partOfName = nameToLowerCase.substr(1);
  return firstLetter.concat(partOfName);
}
// 3 with array methods
const correctName = name => name.toLowerCase().split('').map((letter, index) => index === 0 ? letter.toUpperCase() : letter).join('');

// 4
const getIssue = function(salary) {
  const tax = (18 + 1.5) / 100;
  return salary - salary * tax;
}

// 5
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max + 1)) + min;
}
// 6
const countLetter = (letter, word) => {
  let result = 0;
  const search = letter.toLowerCase();
  for (const currentLetter of word) {
    if (currentLetter.toLowerCase() === search) {
      result++;
    }
  }
  return result;
}
// 7
const convertCurrency = function(currency) {
  const dollar = '$';
  const hryvnia = 'uah';
  let result;
  if (currency.includes(dollar)) {
    result = parseInt(currency, 10) * 25;
    return `${result}UAH`;
  }
  
  if (currency.toLowerCase().includes(hryvnia)) {
    result = parseInt(currency, 10) * 0.04;
    return `${result}$`;
  }
}
// 8
const getRandomPassword = (passwordLength = 8) => {
  let result = '';
  for (let i = 0; i < passwordLength; i++) {
    result += String(Math.floor(Math.random() * 10));
  }
  return result;
}
// 9
const deleteLetters = (letter, word) => {
  let result = '';
  for (const currentLetter of word) {
    if (currentLetter !== letter) {
      result += currentLetter;
    }
  }
  return result;
}
// 10
const isPalyndrom = (word) => {
  const reversedWord = word.replaceAll(' ', '').toLowerCase().split('').reverse().join('');
  return reversedWord === word.replaceAll(' ', '').toLowerCase();
}
//11
const deleteDuplicateLetter = (phrase) => {
  const allLetters = phrase.toLowerCase().split('');
  const duplicatedLetters = {};
  for (const letter of allLetters) {
    duplicatedLetters[letter] = letter in duplicatedLetters;
  }
  for (const letter in duplicatedLetters) {
    if (duplicatedLetters[letter]) {
      for (let i = 0; i < allLetters.length; i++) {
        if (allLetters[i] === letter) {
          allLetters.splice(i, 1);
          i--;
        }
      }
    }
  }
  return allLetters.join('');
}

document.writeln(`
  #1 getMaxDigit(1236) : <b>${getMaxDigit(1236)}</b><br>
  Different way #1 getMaxOfDigits(7678689698) : <b>${getMaxOfDigits(7678689698)}</b><br>
  #2 getPowerOfNumber(3, 2): <b>${getPowerOfNumber(3, 2)}</b><br>
  #3 correctFirstName('kaRL'): <b>${correctFirstName('kaRL')}</b><br>
  Different way #3 correctName('oLeG'): <b>${correctName('oLeG')}</b><br>
  #4 getIssue(1000 ): <b>${getIssue(1000 )}</b><br>
  #5 getRandomNumber(2, 6): <b>${getRandomNumber(2, 6)}</b><br>
  #6 countLetter('а', 'Асталавіста': <b>${countLetter('а', 'Асталавіста')}</b><br>
  #7 convertCurrency('100$'): <b>${convertCurrency('100$')}</b><br>
  #8 getRandomPassword(4): <b>${getRandomPassword(4)}</b><br>
  #9 deleteLetters('a', "blablabla"): <b>${deleteLetters('a', "blablabla")}</b><br>
  #10 isPalyndrom("Я несу гусеня"): <b>${isPalyndrom("Я несу гусеня")}</b><br>
  #11 deleteDuplicateLetter("Бісквіт був дуже ніжним"): <b>${deleteDuplicateLetter("Бісквіт був дуже ніжним")}</b>
`)