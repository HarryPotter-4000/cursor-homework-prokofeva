function getRandomChinese(length) {
  return new Promise((resolve) => {
    let result = '';
    let count = length;
    let appendResult = () => {
      if (count > 0) {
        result += String.fromCharCode(+`${Date.now()}`.slice(-5));
        setTimeout(appendResult, 50);
      } else {
        resolve(result);
      }
      count--;
    }
    setTimeout(appendResult, 50);
  })
}
getRandomChinese(4).then(result => console.log(result));
getRandomChinese(4).then(result => {
  const div = document.getElementById('write');
  div.innerHTML = `
  ${result}
  ` 
})