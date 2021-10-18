class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.isActive = true;
    this._marks = [];
  }
  getInfo() {
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }
  get marks() {
    return this.isActive ? this._marks : null;
  }
  set marks(mark) {
    if (!this.isActive) return null;
    this._marks.push(mark);
    return this._marks;
  }
  getAverageMark() {
    return this._marks.reduce((sum, a) => sum += a) / this._marks.length;
  }
  dismiss() {
    this.isActive = false;
  }
  recover() {
    this.isActive = true;
  }
}

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    setInterval(() => this.getScholarship(), 30000);
  }
  getScholarship() {
    if (this.isActive && this.getAverageMark() >= 4) {
      console.log('Ви отримали 1400 грн. стипендії');
    }
  }
}

const katerina = new BudgetStudent('Cursor education', 1, 'Katerina P');
console.log(katerina);
katerina.marks = 5;
katerina.marks = 4;
console.log('Студент не оплатив навчання - вимикаємо!');
katerina.dismiss();
katerina.marks = 1;
katerina.marks = 1;
console.log(katerina.marks);
console.log('Оплатив навчання - включаємо!');
katerina.recover();
// katerina.marks = 1;
// katerina.marks = 1;
katerina.marks = 4;
katerina.marks = 3;
console.log(`Середній бал ${katerina.getAverageMark()}`);
console.log(katerina.marks);

const result = document.querySelector('.result');
result.innerHTML = `
  <p>${JSON.stringify(katerina.getInfo())}</p>
  <p>Оцінки ${katerina.marks}</p>
  <p>Середній бал ${katerina.getAverageMark()}</p>
  <p>Ви отримали 1400 грн. стипендії</p>
`