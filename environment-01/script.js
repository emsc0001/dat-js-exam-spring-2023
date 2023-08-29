"use strict";

let students = []

window.addEventListener("load", start)

async function start (){
    console.log("running")
    students = await getData()
    console.log(students)
    students.sort((a, b) => a.name.localeCompare(b.name))
    addStudent("Emil", "emilschlichter@gmail.com", false, 2 )
    students.forEach(showStudents)
}

async function getData() {
    const response = await fetch ("students.json")
    const data = await response.json()
    return data
}

function addStudent(name, mail, enrolled, semester) {
    console.log(addStudent)
    
    const newStudent = {
        name: name,
        mail: mail,
        enrolled: enrolled,
        semester: semester,
    }
students.push(newStudent)
}


function showStudents (student) {
    document.querySelector("#students-list").insertAdjacentHTML("beforeend", /*HTML*/ `
    <li> ${student.name}, ${student.mail}, ${student.enrolled}, ${student.semester}</li>`)
}

