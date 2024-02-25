'use strict'

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
    getFullname = function () {
        console.log(`${firstName} ${lastName}`);
    }
    getAcademy = function (student) {
        return console.log(student.academyName);
    }
    whatAcademy = function () {
        console.log(`${this.firstName} ${this.lastName} is attending the ${this.academyName}`);
    }
}
class Student extends Person {
    constructor(firstName, lastName, age, academyName, studentID) {
        super(firstName, lastName, age)
        this.academyName = academyName;
        this.studentID = studentID

    }
    study = function () {
        console.log(`The student ${this.firstName} is studying in the ${this.academyName} academy`);
    }

}


class DesignStudent extends Student {
    constructor(firstName, lastName, age, academyName = "Design Academy", studentID, isStudentOfTheMonth) {
        super(firstName, lastName, age, academyName, studentID)
        this.isStudentOfTheMonth = isStudentOfTheMonth
    }
    attendAdobeExam = function () {
        console.log(`The student ${this.firstName} ${this.lastName} is doing an Adobe exam`);
    }
}

let designStudent = new DesignStudent("Ivana", "Sekulovska", 26, undefined, 3336363, false)
designStudent.attendAdobeExam()

class CodeStudent extends Student {
    constructor(firstName, lastName, age, academyName = "Code Academy", studentID, hasIndividualProject, hasGroupProject) {
        super(firstName, lastName, age, academyName, studentID)
        this.hasIndividualProject = hasIndividualProject;
        this.hasGroupProject = hasGroupProject;
    }
    doProject = function (projectType) {
        if (this.hasIndividualProject && projectType.toLowerCase() === 'individual') {
            console.log(`The student ${this.firstName} ${this.lastName} is currently working on a ${projectType} project`);
        } else if (this.hasGroupProject && projectType.toLowerCase() === "group") {
            console.log(`The student ${this.firstName} ${this.lastName} is currently working on a ${projectType} project`)
        } else if (this.hasGroupProject && this.hasIndividualProject && projectType.toLowerCase() === "individual and group") {
            console.log(`The student ${this.firstName} ${this.lastName} is currently working on a ${projectType} project`)
        } else {
            console.log(`The student ${this.firstName} ${this.lastName} is not working on any projects at the moment`);
        }
    }
}

let codeStudent = new CodeStudent("Mirko", "Mirkovski", 32, undefined, 3535635, false, false)
codeStudent.doProject("none")
let codeStudent2 = new CodeStudent("Darko", "Shterjov", 22, undefined, 3535653, true, false)
codeStudent2.doProject("individual")
let codeStudent3 = new CodeStudent("Kristina", "Valerikova", 45, undefined, 5353643, false, true)
codeStudent3.doProject('group')
let codeStudent4 = new CodeStudent("Hafiz", "Efendi", 34, undefined, 2442525, true, true)
codeStudent4.doProject("individual and group")

class NetworkStudent extends Student {
    constructor(firstName, lastName, age, academyName = "Network Academy", studentID, academyPart) {
        super(firstName, lastName, age, academyName, studentID)
        this.academyPart = academyPart
    }
    attendCiscoExam = function () {
        console.log(`The student ${this.firstName} ${this.lastName} is doing a Cisco exam!`);
    }
}

let networkStudent = new NetworkStudent("Filip", "Stoilkovski", 29, undefined, 3536743, 4)
networkStudent.attendCiscoExam()

designStudent.whatAcademy()
codeStudent.whatAcademy()
networkStudent.whatAcademy()