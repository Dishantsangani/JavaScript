// Prototype in js
// A java script objet is an entity and behavior (Propertties and methods) of an object) JS Objects have a special property called prototype
// we can set Prototype using __Proto__
// const Student = {
//   name: "Dishant",
//   age: 21,
//   Printmarks: function () {
//     console.log("age=", this.age); //
//   },
// };

// const employee = {
//   dev() {
//     console.log("Tax rate is 10%");
//   },
//   // calctax2:function(){
//   //     console.log("tax rate in 10%");
//   // }
// };

// const arjun = {
//   salary: 50000,
// };
// const arjun1 = {
//   salary: 50000,
// };
// const arjun2 = {
//   salary: 50000,
// };
// const arjun3 = {
//   salary: 50000,
// };

// arjun.__proto__ = employee;
// arjun1.__proto__ = employee;
// arjun2.__proto__ = employee;
// arjun3.__proto__ = employee;

// Classes in js
// Class is a proogram-Code Template for Creating Objects
// Those Object will have some state & some Behavioour inside it

// Constructor in js
// class Toyotacar {
//   constructor(brand, milage) {
//     console.log("Creating new Object");
//     this.brandName = brand;
//     this.milage = milage;
//   }
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("Stop");
//   }
// }

// let fortuner = new Toyotacar("Fortuer", 10); //Constructor
// console.log(fortuner);
// // fortuner.setBrand("Fortuner");
// let Lexus = new Toyotacar("lexus", 20);
// // Lexus.setBrand("lexus");
// console.log(Lexus);

// Inheritance in js
// inheritance is passing down properties & Methods From Parent Class to child class
// Employee is the parent class
// Developer is the Child Class which inherits from Employee
// If child & Parent have same method cild method will be used [Method overriding]

// class Parent {
//   hello() {
//     console.log("hello");
//   }
// }
// class child extends Parent {}
// let obj = new child();

// Example 2.0
// class person {
//   constructor() {
//     this.speacies = "Homo speacies";
//   }
//   eat() {
//     console.log("eat");
//   }
//   sleep() {
//     console.log("sleep");
//   }
//   work() {
//     console.log("do nothing");
//   }
// }
// class engineer extends person {
//   work() {
//     console.log("working");
//   }
// }
// class docter extends person {
//   work() {
//     console.log("worTreat patients");
//   }
// }
// let shardha = new engineer();

// Super Keyword
// The super keyword is used to call the constructor of its parrent class to access the parent properties and methds

class person {
  constructor(name) {
    this.speacies = "Homo speacies";
    this.name = name;
  }
  eat() {
    console.log("eating");
  }
  dev() {
    console.log("Dishant sangani");
  }
}
class engineer extends person {
  constructor(name) {
    super(name); //To invoke parent class constructor
  }
  work() {
    super.eat();
    super.dev();
    console.log("working");
  }
}

let engobj = new engineer("Dishant");
