const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1 Розділіть студентів на пари(хлопець + дівчина)
const getPairs = (students) => {
  const pairs = [];
  for (let student of students) {
    if (student[student.length - 1] === 'а') {
      const unfinishedPairIndex = pairs.findIndex(pair => pair.length === 1);
      if (unfinishedPairIndex === -1) {
        pairs.push([, student])
      } else {
        pairs[unfinishedPairIndex].push(student)
      }
    } else {
      const unfinishedPairIndex = pairs.findIndex(pair => pair.length === 2 && !pair[0])
      if (unfinishedPairIndex === -1) {
        pairs.push([student]);
      } else {
        pairs[unfinishedPairIndex][0] = student;
      }
    }
  }
  return pairs;
}
const pairs = getPairs(students);
console.log(pairs);

//2 - Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. 

const assineProjectsToPairs = (pairs, themes) => {
  return pairs.map((pair, i) => {
    const theme = (themes.length > i) ? themes[i] : themes[0];
    return [pair.join(' і '), theme];
  })
}
const pairsWithThemes = assineProjectsToPairs(pairs, themes);
console.log(pairsWithThemes);

//3 - Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
const getGrades = (students, marks) => {
  return students.map((student, i) => {
    const mark = (marks.length > i) ? marks[i] : marks[0];
    return [students[i], mark];
  })
}
const grades = getGrades(students, marks);
console.log(grades);

//4 - Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт
const gradesToPair = (pairs) => {
  return pairs.map((pair, i) => {
    return [...pairs[i], (Math.floor(Math.random() * 6))];
  })
}
const graduatedPairsWithThemes = gradesToPair(assineProjectsToPairs(pairs, themes))
console.log(graduatedPairsWithThemes)

const result = document.querySelector('.result');
result.innerHTML = 
  `<span>Студенти:</span>
  <p>${students}</p>
  <span>Хлопець + дівчина:</span>
  <p>${pairs}</p>
  <span>Пари та теми:</span>
  <p>${pairsWithThemes}</p>
  <span>Оцінки(marks) зі студентом:</span>
  <p>${grades}</p>
  <span>Пари та випадкова оцінка:</span>
  <p>${graduatedPairsWithThemes}</p>
  `;
