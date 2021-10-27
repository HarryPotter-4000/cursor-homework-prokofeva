const stylesheet = document.createElement('style');
const cssRules = [
  'div.squareWrapper { width: 250px; height: 250px; clear: both; }',
  'div.squareWrapper>div { width: 50px; height: 50px; float: left }',
];
for (const cssRule of cssRules) {
  stylesheet.appendChild(
    document.createTextNode(cssRule)
  )
};
document.head.appendChild(stylesheet);

const wrapperDiv = document.createElement('div');
wrapperDiv.className = 'squareWrapper';
document.body.appendChild(wrapperDiv);

function generateRandomColor() {
  const n = 16;
  const m = 16 ** 6;
  return `#${Math.floor(Math.random() * m).toString(n)}`
}

function generateBlocks(parentElement) {
  const blocks = [];
  for (let i = 0; i < 25; i++) {
    const block = document.createElement('div');
    block.style.backgroundColor = generateRandomColor();
    parentElement.appendChild(block);
    blocks.push(block);
  }
  return blocks;
}

const blocks = generateBlocks(wrapperDiv);

function generateBlocksInterval() {
  for (const block of blocks) {
    block.style.backgroundColor = generateRandomColor();
  }
}
setInterval(generateBlocksInterval, 1000);
