// class for student
class Student {
  constructor(name) {
    this.name = name;
    this.school = null;
  }
  setSchool(school) {
    this.school = school;
  }
}

// class for school
class School {
  constructor(name) {
    this.name = name;
    this.students = [];
  }
  addStudent(stud_name) {
    this.students.push(stud_name);
  }
}

const entry1 = new Student("John");
const sch1 = new School("SSV");
entry1.setSchool("SSV");
sch1.addStudent(entry1);

console.log(entry1);
console.log(sch1);
