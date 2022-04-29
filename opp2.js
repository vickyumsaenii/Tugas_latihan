// Factory class
// Class yang di utaman method nya di banding key

class Student {
  constructor(name, age, isGraduated) {
      this.name = name;
      this.age = age;
      this.isGraduated = isGraduated;
  }
}

class Classroom {
  constructor(room) {
      this.room = room || []
  }
  getStudents(data) {
      let students = data.map(el => {
          const [name, age, isGraduated] = el
          return new Student(name, age, isGraduated)
      })
      this.room = students
  }
  inputStudent(...params) {
      const [name, age, isGraduated] = params
      const student = new Student(name, age, isGraduated)
      this.room.push(student)

      console.log(`Student with name '${name}' has been inputted.`)
  }
  showStudents() {
      console.log("Student list:")
      this.room.forEach((element, index) => {
          console.log(`${index + 1}. ${element.name}, ${element.age} years old.`)
      })
  }
  deleteStudent(studentName) {
      let students = this.room.filter(el => el.name !== studentName)
      this.room = students

      console.log(`'${studentName}' has been deleted.`)
  }
  statusStudents(){
      // Graduated
      console.log("Graduated Students: ")
      this.room.forEach((el,index) => {
          if(el.isGraduated === true){
              console.log(`${index + 1}. ${el.name}, ${el.age} years old`)
          }
      })
      // Not Graduated Yet
      console.log("Not Graduated Yet Students: ")
      this.room.forEach((el,index) => {
          if(el.isGraduated === false){
              console.log(`${index + 1}. ${el.name}, ${el.age} years old`)
          }
      })
  }
}

// const student1 = new Student("Vincent", 29, true)
// const student2 = new Student("James", 27, false)
// const student3 = new Student("Jim", 25, true)

const data = [
  ["Vincent", 29, true],
  ["James", 27, true],
  ["Jim", 25, false],
  ["Stella", 22, false],
  ["Rina", 23, true]
]

const classroom = new Classroom()
// classroom.inputStudent(student1)
// classroom.inputStudent(student2)
// classroom.inputStudent(student3)

classroom.getStudents(data)
// classroom.deleteStudent("Jim")
// classroom.deleteStudent("Stella")
// classroom.showStudents()
// console.log(classroom.room)
classroom.statusStudents()