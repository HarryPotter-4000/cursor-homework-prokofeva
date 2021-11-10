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



// function generateBlocks() {
//   const body = document.querySelector('body');
//   const div = document.createElement('div');
//   div.style.width ='260px';
//   div.style.display = 'flex';
//   div.style.flexWrap = 'wrap';
//   div.style.justifyContent = "flex-start";
//   for (let k = 1; k <= 5; k++) {
//     const row = document.createElement('div');
//     row.style.display = 'flex';
//     row.style.justifyContent = "flex-start";
//     for (let i = 1; i <= 5; i++) {
//       const square = document.createElement('div');
//       square.style.width = '50px';
//       square.style.height = '50px';
//       square.style.background = '#' + (Math.floor(Math.random() * 16777216).toString(16));
//       row.appendChild(square);
//     }
//   div.appendChild(row);
//   }
//   body.appendChild(div); 
// };

// function generateBlocksInterval() {
//   setInterval(() => {
//     generateBlocks();
//   }, 10000);
// }
// generateBlocksInterval();


// const button = document.createElement('button');
// button.style.color = 'red';
// body.appendChild(button);
// button.addEventListener("click", generateBlocks);

// for(let i = 5; i > 0; i--) generateBlocks();
// generateBlocks();

// const result = document.querySelector('.result');
// result.innerHTML = `
//   <p>${JSON.stringify(katerina.getInfo())}</p>
//   <p>Оцінки ${katerina.marks}</p>
//   <p>Середній бал ${katerina.getAverageMark()}</p>
//   <p>Ви отримали 1400 грн. стипендії</p>
// `
// 13
// function getRandomChinese(length) {
//   return new Promise((resolve) => {
//     let stringInChinese = '';
//     let i = 1;

//     while (i < length) {
//       setTimeout(() => {
//         let timeInMs = Date.now();
//         let chineseLetter = String.fromCharCode(timeInMs).substr( -5 );
//         console.log(chineseLetter);
//         stringInChinese = stringInChinese + chineseLetter;
//         resolve(stringInChinese);
//       }, i * 50);
//       i++;
//     }
    
//   });
// }
// getRandomChinese(4).then(result => console.log(result));


//------------------------------------pattern js
// const generateColoredBlocks = () => {
//     createOneBlock();
//     changeBlockColors();
// }
// const generateRandomNumber = () => {
//     return 5;
// };
//
// const generateRandomArray = (length) => {
//     const newArray = new Array(length);
//     return newArray.map(() => {
//         return generateRandomNumber();
//     })
// }
//
// if(turnOn && miles > 100 && fuel < 3500){
//     console.log("okay");
// }
//
//
// if(turnOff && miles > 250 && fuel < 1500){
//     console.log("okay");
// }
//
// if(turnOn && miles > 100 && fuel < 3500){
//     console.log("okay");
// }
//
// 'superpassword'
// 3.141592653589;
// a * b * c * d ** 2 / 2
//
// const MAX_DISTANCE = 1000;
// const MAX_FILE_SIZE = 1024 * 100 * 100; // 100MB
//
// if(file.size < MAX_FILE_SIZE){
//
// }
//
//
// const makeOrder = () => {
//     const total = calcTotalSum(); // 1000
//     const totalWithTaxes = addTaxes(); // 1200
//     const totalWithDiscount = makeDiscount(); // 1200 - 120 = 1080
//     const totalInUsd = changeCurrency(); // 1080 / 26.5
// }
//
// const calcTotalSum = () => {};
// const makeDiscount = () => {};
// const changeCurrency = () => {};
// const addTaxes = () => {};
//
// let cart = [];
// const clearCartAndSaveToDB = (cart) => {
//     localStorage.setItem("oldCart", JSON.stringify(cart));
//     cart = [];
// }
// // 1 очистка корзины для интерфейса
// // 2 сохранения данных в базе данных
//
// const calcSumWithDiscount = (products, discount = 0) => {
//     const total = products.reduce((total, p) => total +  (p.price * p.count));
//     return total * 1 - discount;
// }
//
// // 11
// const generatePassword = () => {
//     return '1234';
// }
//
// const generatePasswordWithLetters = () => {
//     const numberPassword = generatePassword();
//     return 'aa@_' + numberPassword + '$%^&*';
// }
//
class Vehicle {
  speed = 100
  static getRoadTime(vehicle, distance){
      return distance / vehicle.speed;
  }
}

class WorkingVehicle extends Vehicle {
  addFuel(){
      return 'FUEL IS ADDED';
  }
}

class Truck extends WorkingVehicle{
  weight = 100;
}

class Bus extends WorkingVehicle{
  seats = 50;
};

class BrokenCar extends Vehicle{
  speed = 'none'
}

const car = new Vehicle();
const truck = new Truck();
const bus = new Bus();
const brokenCar = new BrokenCar();

const course = {};
const teacher = {};

const createTeacher = (teacherName, teacherPhone, teacherEmail) => {
  teacher.name = teacherName;
  teacher.phone = teacherPhone;
  teacher.email = teacherEmail;
}

const createCourse = (name, duration) => {
  course.name = name;
  course.duration = duration;
}

const initiateCourse = (form) => {
  createCourse(form.courseName, form.courseDuration);
  createTeacher(form.teacherName, form.teacherPhone, form.teacherEmail);
}

const data = {
  total: 300
}

const calcSumWithDiscount = (products, discount = 0) => {
  const total = products.reduce((total, p) => total +  (p.price * p.count), 0);
  return total * (1 - discount);
}

const memento = {

};
const changeCurrency = (total) => {
  if(!isFinite(parseInt(total))){
      throw new Error("Number is not correct");
  }
  if(memento[total]){
      return memento[total];
  }
  const result = total / 26.5;
  memento[total] = result;
  return result;
}

changeCurrency(calcSumWithDiscount([{ price: 100, count: 10 }]));

const tree = [{
  id: '1ed-23a',
  name: "Vlad",
  children: [{
      id: '1ed-23a-f43',
      name: "Vlad2"
  }]
}];

const simpleSet = new Set([1, 2, 3, 4, 5, 2, 3, 4, 1, 67, 13, 53, 2]);

const products = [{
  size: 'XL'
}, {
  size: 'L'
}, {
  size: 'M'
}, {
  size: 'XL'
}];

const sizes = new Set();
products.forEach((product) => {
  if(sizes.has(product.size)){
    sizes.delete(product.size);
  }  else {
      sizes.add(product.size);
  }
});


class HashTable {
  map = new WeakMap()
  set(name, value){
      const hashValue = this.hash(name);
      this.map.set(hashValue, value);
  }

  delete(name){
      const hashValue = this.hash(name);
      this.map.delete(hashValue);
  }

  get(name){
      const hashValue = this.hash(name);
      return this.map.get(hashValue);
  }

  hash(name){
      return new Number(name.toUpperCase().split("").map((letter) => letter.charCodeAt(0)).join(""));
  }
}

const table = new HashTable();
table.set("Vlad", ['How cook potato?', 'How cook batat?']);
table.set("Vitaliy", ['Как ввести лохдаун?', 'Что будет если месяц не ходить в кино?']);
console.log(table.get("Vitaliy"));


const singleton = {
  name: "Test"
};

class Singleton {
  constructor() {
      if(Singleton.isCreated){
          throw new Error(`Already exist`);
      }
      Singleton.isCreated = true;
  }
}

// new Singleton();
// new Singleton();


document.addEventListener("calcTotal", () => {
  document.dispatchEvent(new Event("makeDiscount", 1000));
});

document.addEventListener("makeDiscount", () => {
  document.dispatchEvent("addTaxes");
});


const events = {
  "#button": (event) => {
      console.log("#button");
  },
  "#text": (event) => {
      console.log("#text");
  }
};

document.body.addEventListener("click", (event) => {
  const id = event.target.id;
  events?.['#' + id]?.(event);
})
