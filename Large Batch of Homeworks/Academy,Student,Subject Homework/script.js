'use strict'

// Creating the Academy Object Template

function Academy(academyName, academyStudents, academySubjects, academyStart, academyEnd, numOfClasses) {
    this.academyName = academyName;
    this.academyStudents = academyStudents;
    this.academySubjects = academySubjects;
    this.academyStart = new Date(academyStart);
    this.academyEnd = new Date(academyEnd);
    this.numOfClasses = numOfClasses * 10;
    this.printStudents = function () {
        this.academyStudents.forEach(student => {
            console.log(student);
        })
    }
    this.printSubjects = () => {
        this.academySubjects.forEach(subject => {
            console.log(subject);
        })
    }
}

function Subject(subjectTitle, numOfClasses = 10, isElective, academy, students) {
    this.subjectTitle = subjectTitle;
    this.numOfClasses = numOfClasses;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.overRideClasses = function (number) {
        if (number <= 3) {
            console.log(`You cannot have a number of classes lower than 3`);
        } else {
            this.numOfClasses = number
            return console.log(`The number of Classes is ${this.numOfClasses}`);
        }
    }
}

function Student(firstName, lastName, studentAge = 0, completedSubjects, academy = null, currentSubject = null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentAge = studentAge;
    this.completedSubjects = [completedSubjects];
    this.academy = academy,
        this.currentSubject = currentSubject;
    this.startAcademy = function (academy) {
        this.academy = academy;
        academy.academyStudents.push(this)
    };
    this.startSubject = function (someSubject) {
        if (this.academy === null) {
            console.log("You can't enrol on a subject without academy!");
        } else if (this.currentSubject !== null) {
            this.completedSubjects.push(this.currentSubject);
            this.currentSubject = someSubject;
            someSubject.students.push(this);
        } else {
            this.currentSubject = someSubject;
            someSubject.students.push(this);
        }
    }
}

let basicJS = new Subject("Basic Javascript", undefined, false, undefined, [])
let html = new Subject("HTML", undefined, false, undefined, [])
let advancedJS = new Subject("Advanced Javascript", undefined, false, "SEAVUS", [])
let qinshiftAcademy = new Academy("Qinshift", [], [basicJS, html, advancedJS], '10/15/2023', '10/15/2024')
let studentOne = new Student('Giga', 'Chad', 24);
let studentTwo = new Student('Woke', 'Wojak', 45)

console.log(qinshiftAcademy);
console.log(basicJS);
console.log(html);
console.log(advancedJS);
console.log(studentOne);
console.log(studentTwo);
console.log('------------------------------------------');

qinshiftAcademy.printStudents()
qinshiftAcademy.printSubjects()
html.overRideClasses(8)
qinshiftAcademy.printSubjects()
html.overRideClasses(4)
qinshiftAcademy.printSubjects()
studentOne.startAcademy(qinshiftAcademy)
qinshiftAcademy.printStudents()
studentOne.startSubject(html)
qinshiftAcademy.printStudents()
studentOne.startSubject(advancedJS)
qinshiftAcademy.printStudents();
studentTwo.startAcademy(qinshiftAcademy);
studentTwo.startSubject(basicJS);
qinshiftAcademy.printStudents();

console.log(qinshiftAcademy);
