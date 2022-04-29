// Object Literal
const people = {
    name: "Vincent",
    age: 29,
    hobbies: ["coding", "design"],

    speakUp: function () {
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    },
    mentionHobbies: function () {
        console.log("My hobbies: ")
        this.hobbies.forEach((hobby, index) => {
            console.log(`${index + 1}. ${hobby}`)
        })
    }
}

// // console.log(typeof people)
// // people.speakUp()
// // people.mentionHobbies()

class People {
  constructor(name, age, hobbies) {
      this.name = name || "empty";
      this.age = age || 0;
      this.hobbies = hobbies || [];
  }

  speakUp() {
      console.log(`My name is ${this.name} and my age is ${this.age}.`)
  }

  mentionHobbies() {
      console.log("My hobbies: ")
      this.hobbies.forEach((hobby, index) => {
          console.log(`${index + 1}. ${hobby}`)
      })
  }

  addHobby(hobbyName) {
      this.hobbies.push(hobbyName)
      console.log(`"${hobbyName}" is my new hobby!`)
  }

  deleteHobby(){
      this.hobbies.pop()
  }
}

// console.log(typeof People)

// Instanciation => Proses pembuatan instansi
const people = new People("Vincent", 29, ["coding", "design"])

// People => Instance of class People / Object Class
// console.log(people)

// const orang = new People("Orang", 35, [])
// console.log(orang)

people.addHobby("explore js")
people.addHobby("travelling")
people.addHobby("makan dan minum")
people.mentionHobbies()