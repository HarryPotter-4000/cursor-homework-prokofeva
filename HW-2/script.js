
function getNumberInput(label) {
    let answer;
    do {
        answer = prompt(label, '');
    } while (answer.length === 0 
        || isNaN(parseInt(answer, 10))
        || Number.isInteger(+answer) === false
    )
    return parseInt(answer, 10);
}


let firstNumber = getNumberInput('Введите целое число N');
let secondNumber = getNumberInput('Введите целое число M');
const shouldSkipEvenNumbers = confirm('Пропускать парные числа?');

let sumOfNumbers = 0;

if ( firstNumber < secondNumber) {
    for (let number = firstNumber; number <= secondNumber; number++) {
        if (shouldSkipEvenNumbers && number % 2 === 0) {
            continue;
        }
        sumOfNumbers += number;
    }
    alert(`Сумма чисел: ${sumOfNumbers}`);
}

