const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

function findStudentByName(studentName) {
  return students.filter(student => student.name === studentName);
}

// 1 getSubjects(students[0] --> ["Math", "Algorithms", "Data science"]
function getSubjects(studentName) {
  const student = findStudentByName(studentName);
  const themes = Object.keys(student[0].subjects);
  const result = themes.map(name => {
    return name[0].toUpperCase() + name.slice(1).replaceAll('_', ' ');
  });
  return result;
}
const subjects = getSubjects("Tanya");
console.log(`1 задание: ${subjects}`);

// 2 - Створіть функцію getAverageMark(students[0]) --> 3.79
function getAverageMark(studentName) {
  const student = findStudentByName(studentName);
  const arraysOfMarks = Object.values(student[0].subjects).flat();
  const result = Number((arraysOfMarks.reduce((a, b) => a + b) / arraysOfMarks.length).toFixed(2));
  return result;
}
const averageMark = getAverageMark('Tanya');
console.log(`2 задание: ${averageMark}`);

// 3 - Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79}
function getStudentInfo(studentName) {
  const student = findStudentByName(studentName);
  const { name, course } = student[0];
  return {'course': course,
          'name': name,
          'averageMark': getAverageMark(studentName),
  }
}
const studentInfo = getStudentInfo('Victor');
console.log(`3 задание: ${JSON.stringify(studentInfo)}`);

// 4 - Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]
function getStudentsNames(students) {
  return students.map((student) => {
    return student.name;
  }).sort();
}
const names = getStudentsNames(students);
console.log(`4 задание: ${names}`);

// 5 - Створіть функцію getBestStudent(students) --> "Anton"
function getBestStudent(students) {
  let bestStudent;
  let max = 0;
  students.forEach(student => {
    const { name } = student;
    const average = getAverageMark(name);
    if (average > max) {
      max = average;
      bestStudent = name;
    }
  });
  return bestStudent;
}
const bestStudent = getBestStudent(students);
console.log(`5 задание: ${bestStudent} - кращий студент`);

// 6 - Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 }
function calculateWordLetters(word) {
  const arrayOfWOrd = word.split('');
  const result = {};
  arrayOfWOrd.forEach((a)  => {
      result[a] = result[a] + 1 || 1;
  });
  return result;
}
const amountOfLetters = calculateWordLetters('тест');
console.log(`6 задание: ${JSON.stringify(amountOfLetters)}`);

const result = document.querySelector('.result');
result.innerHTML = `
  <ol>
    <li>getSubjects(studentName) : ${subjects}</li>
    <li>getAverageMark(studentName) : ${averageMark}</li>
    <li>getStudentInfo(studentName) : <span>${JSON.stringify(studentInfo)}</span></li>
    <li>getStudentsNames(students) : ${names}</li>
    <li>getBestStudent(students) : ${bestStudent}</li>
    <li>calculateWordLetters(word) : ${JSON.stringify(amountOfLetters)}</li>
  </ol>
`