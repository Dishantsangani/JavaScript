class student {
  // This is  A Consructor method
  constructor(name, age) {
    this.studentname = name;
    this.studentage = age;
    console.log("Constructor Function");
  }
  // Protoype Method
  hello() {
    console.log("Hello" + this.studentname + "Your Age Is " + this.studentage);
  }
  // Static Method
  static saticmethod() {
    console.log("Static Function");
  }
}
let a = new student("Dishant", 22);
a.hello();
student.saticmethod();
// let b = new student(); ,
