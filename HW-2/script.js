function getNumberInput(label) {
    let answer;
    do {
        answer = prompt(label, '').trim();
    } while (answer.length === 0 
        || isNaN(parseInt(answer, 10))
        || Number.isInteger(+answer) === false
    )
    return parseInt(answer, 10);
}

let firstNumber = getNumberInput('Please enter an integer N');
let secondNumber = getNumberInput('Please enter an integer M');
const shouldSkipEvenNumbers = confirm('Skip even numbers?');

let sumOfNumbers = 0;

if ( firstNumber < secondNumber) {
    for (let number = firstNumber; number <= secondNumber; number++) {
        if (shouldSkipEvenNumbers && number % 2 === 0) {
            continue;
        }
        sumOfNumbers += number;
    }
    alert(`Sum of numbers: ${sumOfNumbers}`);
}

