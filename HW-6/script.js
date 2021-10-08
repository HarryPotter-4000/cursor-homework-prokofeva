// 1 - getRandomArray(15, 1, 100)
// const getRandomArray = (length, min, max) => {
//   const result = [];
//   const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//   for (let i = 0; i < length; i++) {
//     result.push(getRandomNumber(min, max))
//   }

//   return result;
// }
// const randomArray = getRandomArray(15, 1, 100);
// console.log(randomArray);

//1 - getRandomArray(15, 1, 100)
function getRandomArray(length, min, max) {
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  return Array(length).fill(0).map(() => getRandomNumber(min, max));
}
const randomArray = getRandomArray(15, 1, 100);
console.log(randomArray);

// 2 - Створіть функцію getModa(...numbers)
function getModa(...numbers) {
  const counters = {};

  numbers.forEach(item => {
    if (item in counters) {
      counters[item]++;
    } else {
      counters[item] = 1;
    }
  });

  let result;
  let max = 0;

  for (let number in counters) {
    if (counters[number] > max) {
      result = number;
      max = counters[number];
    }
  }
  return result;
}
const moda = getModa(...randomArray);
console.log(moda);

// 3 - Створіть функцію getAverage(...numbers)

function getAverage(...numbers) {
  const sumOfNumbers = numbers.reduce((result, num) => {
    if (Number.isInteger(num)) {
      return result + num;
    } else {
      return result;
    }
  });
  const average = sumOfNumbers / [...numbers].length;
  return average;
}
const average = getAverage(...randomArray);
console.log(average);

//4 - Створіть функцію getMedian(...numbers)

function getMedian(...numbers) {
  const ascendingNumbers = numbers.filter(num => Number.isInteger(num)).sort((a, b) => a - b);
  console.log(ascendingNumbers);
  const center = ascendingNumbers.length / 2;
  let result;
  if (ascendingNumbers.length % 2 === 0) {
    const previous = ascendingNumbers[center - 1];
    const next = ascendingNumbers[center];
    result = (previous + next) / 2;
  } else {
    result = ascendingNumbers[Math.floor(center)];
  }
  return result;
}
const median = getMedian(...randomArray);
console.log(median);


//5 - Створіть функцію filterEvenNumbers(...numbers)
function filterEvenNumbers(...numbers) {
  const result = numbers.filter(num => num % 2 !== 0);
  return result;
}
const arrayOfevenNumbers = filterEvenNumbers(1, 2, 3, 4, 5, 6);
console.log(arrayOfevenNumbers);

// 6 - Створіть функцію countPositiveNumbers(...numbers)
function countPositiveNumbers(...numbers) {
  return numbers.reduce((counter, number) => {
    if (number > 0) {
      return counter += 1;
    } else {
      return counter;
    }
  }, 0);
}
const counterOfPositiveNumbers = countPositiveNumbers(1, -2, 3, -4, 0, -5, 6);
console.log(counterOfPositiveNumbers);

// 7 - Створіть функцію getDividedByFive(...numbers)

function getDividedByFive(...numbers) {
  return numbers.filter(number => number % 5 === 0);
}
const numbersDivideFive = getDividedByFive(...randomArray);
console.log(numbersDivideFive);

// 8 - Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
function replaceBadWords(string) {
  const shitWords = ['shit', 'fuck'];
  let result = '';

  for (let word of shitWords) {
    let length = word.length;
    let star = '*'.repeat(length);
    if (string.includes(word)) {
      result = string.replace(word, star);
    }
  }
  return result;
}
const onlyGoodWords = replaceBadWords("Are you fucking kidding?");
console.log(onlyGoodWords);

// 9 - Створіть функцію divideByThree(word)
function divideByThree(word) {
  const result = [];
  
  const rest = word.length % 3;
  const middleOfWord = word.length - rest;
  const multipleOfThree = word.substr(0, middleOfWord, rest);

  const letters = multipleOfThree.toLowerCase().split('');
  
  for (let i = 0; i < letters.length; i += 3) {
      result.push(letters[i] + letters[i + 1] + letters[i + 2]);
  }
  if (word.length % 3 !== 0) {
    result.push(word.slice(-rest));
  } else {
    result;
  }
  return result;
}
const syllables = divideByThree("Commander");
console.log(syllables);

// 10 - Створіть функцію generateCombinations(word)
// function generateCombinations(word) {
//   let result = [];
//   for (let letter of word) {
//     result.push(letter);
//   }
//   return result;
// }
// const allCombitationOfWord = generateCombinations("man");
// console.log(allCombitationOfWord);
// console.log(generateCombinations("ol"));


const result = document.querySelector('.result');
result.innerHTML = 
  `<ol>
    <li>getRandomArray(15, 1, 100)</li>
    <p>${randomArray}</p>

    <li>getModa(...randomArray)</li>
    <p>${moda}</p>

    <li>getAverage(...randomArray)</li>
    <p>${average}</p>

    <li>getMedian(...randomArray)</li>
    <p>${median}</p>

    <li>filterEvenNumbers(1, 2, 3, 4, 5, 6)</li>
    <p>${arrayOfevenNumbers}</p>

    <li>countPositiveNumbers(1, -2, 3, -4, -5, 6)</li>
    <p>${counterOfPositiveNumbers}</p>

    <li>getDividedByFive(...randomArray)</li>
    <p>${numbersDivideFive}</p>

    <li>replaceBadWords("Are you fucking kidding?")</li>
    <p>${onlyGoodWords}</p>

    <li>divideByThree("Commander")</li>
    <p>${syllables}</p>


  </ol>`;
  // <li>generateCombinations(word)</li>
  // <p>${allCombitationOfWord}</p>