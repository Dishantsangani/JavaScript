// Constructor Function
function EName(first, last, age, clss) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.class = clss;
  this.nationality = "indian";
}

// Adding some properties in constructer
EName.prototype.nationality = "indian";

var employee = new EName("dishant", "sangani", 20, 27);
console.log(employee.nationality);
