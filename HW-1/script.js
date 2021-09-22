const bread = 15.678;
const butter = 123.965;
const cheese = 90.2345;

const maxPrice = Math.max(bread, butter, cheese);
const minPrice = Math.min(bread, butter, cheese);
const basket = bread + butter + cheese;


const integerAmount = Math.floor(bread) + Math.floor(butter) + Math.floor(cheese);
const roundToHundreds = Math.round(integerAmount / 100) * 100;
function isEvenNumber() {
    return integerAmount % 2 === 0 ? true : false;
};
const change = 500 - basket;
const avg = (basket / 3).toFixed(2);
const discount = Math.floor(Math.random() * 101);
const amount = (basket - basket * (discount / 100)).toFixed(2);
const costPrice = integerAmount / 2;
const profit = ((basket / 2) - Math.round(basket * discount / 100)).toFixed(2);
// const profit = costPrice - Math.round(integerAmount * discount / 100);

const div = document.querySelector('div');
div.innerHTML = 
    `<ul>
        <li>Ціна на хліб: ${bread} гривень;</li>
        <li>Ціна на масло: ${butter} гривень;</li>
        <li>Ціна на сир: ${cheese} гривень;</li>
        <li>Максимальне число: ${maxPrice};</li>
        <li>Мінімальне число: ${minPrice};</li>
        <li>Сума товарів: ${basket} гривень;</li>
        <li>Сума цілої частини вартості : ${integerAmount} гривень;</li>
        <li>Сума товарів округлена до сотень: ${roundToHundreds} гривень;</li>
        <li>Парне чи непарне число: ${isEvenNumber()};</li>
        <li>Сума решти з 500гр : ${change} гривень;</li>
        <li>Середнє значення цін: ${avg} гривень;</li>
        <li>Випадкова знижка: ${discount}%;</li>
        <li>Сума до оплати : ${amount} гривень;</li>
        <li>Чистий прибуток: ${profit} гривень;</li>
    `;
