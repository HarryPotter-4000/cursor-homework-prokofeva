const newId = document.getElementById('id');
const text = document.getElementById('text');

function* createIdGenerator() {
  let val = 1;
  while (true) {
    yield val++;
  }
}

const idGenerator = createIdGenerator();

newId.addEventListener('click', () => {
  text.innerText = `${idGenerator.next().value}`
})

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

const up = document.getElementById('up');
const down = document.getElementById('down');
const description = document.getElementById('description');
const showFontSize = document.getElementById('showFontSize');

function* newFontGenerator(number) {
  while (true) {
    const fontSize = yield number;
    if (fontSize === "up") {
      number += 2;
    }
    if (fontSize === "down") {
      number -= 2;
    } 
  }
}
const fontGenerator = newFontGenerator(14);
description.style.fontSize = `${fontGenerator.next('up').value}px`;

up.addEventListener('click', () => {
  description.style.fontSize = `${fontGenerator.next('up').value}px`;
  showFontSize.innerText = `font-size: ${fontGenerator.next().value}px`;
});
down.addEventListener('click', () => {
  description.style.fontSize = `${fontGenerator.next('down').value}px`;
  showFontSize.innerText = `font-size: ${fontGenerator.next().value}px`;
});
