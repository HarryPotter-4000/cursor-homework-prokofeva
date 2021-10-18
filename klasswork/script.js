// const staffs = {
//   salary: 100000,
//   position: "CEO",
//   subordinates: [{
//       salary: 75000,
//       position: "CTO",
//       subordinates: [{
//           position: "Engineer",
//           salary: 50000
//       }]
//   }, {
//       salary: 70000,
//       position: "CMO",
//       subordinates: [{
//           position: "Secretary",
//           salary: 20000
//       }, {
//           position: "Chief",
//           salary: 30000,
//           subordinates: [{
//               position: "Worker",
//               salary: 18000,
//               subordinates: [{
//                   position: "Intern",
//                   salary: 5000
//               }]
//           }]
//       }]
//   }],
// };

// const getMinSalary = (staffs) => {
//   if(!staffs?.subordinates?.length){
//       return staffs.salary;
//   }
//   const minSalary = Math.min(staffs.salary, ...subordinatesSalaries);
//   return minSalary;
// }

const arrObj = [{a: 1, b: 2}, {c: 3, d: 4}, {e: 5, f: 6}];

console.log(arrObj.reduce(function(result, current) {
  return Object.assign(result, current);
}, {}));

// If you prefer arrow functions, you can make it a one-liner ;-)
console.log(arrObj.reduce(((r, c) => Object.assign(r, c)), {}));

// Thanks Spen from the comments. You can use the spread operator with assign
console.log(Object.assign({}, ...arrObj));

// 5 - Створіть функцію getBestStudent(students) --> "Anton"
function getBestStudent(students) {
  const averageMarks = students.map(student => {
    const { name } = student;
    return {
      name,
      mark: getAverageMark(name),
    };
  });
  // const studentAndAverageMark = students.map((student, name, subjects) => {
//     const studentName = student.name;
//     const studentMarks = (Object.values(student.subjects)).flat();
//     const averageMark = Number((studentMarks.reduce((result, num) => result + num) / studentMarks.length).toFixed(2));
//     const result = {};
//     result[studentName] = averageMark;
//     return result;
//   })
//   console.log(studentAndAverageMark);
//   const oneBigObject = Object.assign({}, ...studentAndAverageMark);
// console.log(oneBigObject);
  // let result;
  // let max = 0;

  // for (let mark in oneBigObject) {
  //   if (oneBigObject[mark] > max) {
  //     result = mark;
  //     max = oneBigObject[mark];
  //   }
  // }
  let bestStudent;
  let max = 0;
  for (const student of averageMarks) {
    if (student.mark > max) {
      bestStudent = student.name;
      max = student.mark;
    }
  }
  return bestStudent;
}
const bestStudent = getBestStudent(students);
console.log(`5 задание: ${bestStudent} - кращий студент`);


// Tatiana Simchenko
const getBestStudent = (students) => {
  return students.reduce((a, b) =>
    getAverageMark(a) > getAverageMark(b) ? a : b
  ).name;
};

console.log(getBestStudent(students));

// Eugenia

const getBestStudent = (studentsArr) => {
  const ratedStudents = studentsArr.sort((studentA, studentB) => getAverageMark(studentA) - getAverageMark(studentB));
  const bestStudent = ratedStudents[ratedStudents.length - 1];

  return bestStudent.name;
}

const bestStudent = getBestStudent(students);


const name = "Sammy"
const map = Array.prototype.map

const newName = map.call(name, eachLetter => {
    return `${eachLetter}a`
})

console.log(newName)