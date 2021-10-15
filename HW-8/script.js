const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const getMyTaxes = function (salary) {
  return salary * this.tax;
}
console.log(`Податки з 1000 гр в Україні: ${getMyTaxes.call(ukraine, 1000)}`);
console.log(`Податки з 1000 гр в Латвії: ${getMyTaxes.call(latvia, 1000)}`);
console.log(`Податки з 1000 гр в Литві: ${getMyTaxes.call(litva, 1000)}`);

const getMiddleTaxes = function () {
  return this.tax * this.middleSalary;
}
console.log(`Податки з зарплати в Україні: ${getMiddleTaxes.call(ukraine)}`);
console.log(`Податки з зарплати в Латвії: ${getMiddleTaxes.call(latvia)}`);
console.log(`Податки з зарплати в Литві: ${getMiddleTaxes.call(litva)}`);

const getTotalTaxes = function () {
  const { tax, middleSalary, vacancies } = this;
  return tax * middleSalary * vacancies;
}
console.log(`Податки повні в Україні: ${getTotalTaxes.call(ukraine)}`);
console.log(`Податки повні в Латвії: ${getTotalTaxes.call(latvia)}`);
console.log(`Податки повні в Литві: ${getTotalTaxes.call(litva)}`);

const printRandomSalaryPerCountry = function () {
  const minSalary = 1500;
  const maxSalary = 2000;
  const salary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
  const taxes = +(salary * this.tax).toFixed(2);
  const profit = +(salary - taxes).toFixed(2);
  const result = {
    'salary': salary,
    'taxes': taxes,
    'profit': profit,
  };
  console.log(result);
}
const getMySalary = function () { 
  setInterval(() => {
    printRandomSalaryPerCountry.call(ukraine);
    printRandomSalaryPerCountry.call(latvia);
    printRandomSalaryPerCountry.call(litva);
  }, 10000);
}
getMySalary();

const result = document.querySelector('.result');
result.innerHTML = `
    <p>1. Податки з 1000 гр в Україні: ${getMyTaxes.call(ukraine, 1000)}</p>
    <p>Податки з 1000 гр в Латвії: ${getMyTaxes.call(latvia, 1000)}</p>
    <p>Податки з 1000 гр в Литві: ${getMyTaxes.call(litva, 1000)}</p>
    <p>2. Податки з зарплати в Україні: ${getMiddleTaxes.call(ukraine)}</p>
    <p>Податки з зарплати в Латвії: ${getMiddleTaxes.call(latvia)}</p>
    <p>Податки з зарплати в Литві: ${getMiddleTaxes.call(litva)}</p>
    <p>3. Податки повні в Україні: ${getTotalTaxes.call(ukraine)}</p>
    <p>Податки повні в Латвії: ${getTotalTaxes.call(latvia)}</p>
    <p>Податки повні в Литві: ${getTotalTaxes.call(litva)}</p>
    <p>4. В консолі виводиться getMySalary</p>
`
