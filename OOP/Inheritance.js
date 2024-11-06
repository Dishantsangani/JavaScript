class employee {
  constructor(name, age, salary) {
    this.empname = name;
    this.empage = age;
    this.empsalary = salary;
    // console.log("Constructor : Employee");
  }
  info() {
    console.log(" Employee Name" + this.empname);
    console.log(" Employee age" + this.empage);
    console.log(" Employee salry" + this.empsalary);
  }
}
class manager extends employee {
  info() {
    let ta = 1000;
    let pa = 300;
    let totalsalary = this.empsalary + ta + pa;
    console.log(
      `Manager Class, Name: ${this.empname}  Age: ${this.empage} Salary: ${totalsalary}`
    );
  }
}
let a = new manager(" Dishant Sangani", 22, 270000);
let b = new manager(" Dev Patel", 27, 27000);
a.info();
b.info();
   