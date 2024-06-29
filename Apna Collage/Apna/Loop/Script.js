// For Loop
// The for loop is used to iterate over the elements of an array or the properties of an object.
for (let count = 1; count <= 10; count++) {
  console.log("Dishant is good boy");
}
console.log("Done");

// Practic 1
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum += i;
}
console.log("sum =", sum);
console.log("loop is done");

// Practice 2
for (var i = 1; i <= 5; i++) {
  console.log("i=", i);
}
console.log(i);

// while loop
// A while loop will execute as long as the condition is true.
// Here's how a basic while loop looks like:
let k = 1;
while (k <= 10) {
  console.log("i=", k);
  k++;
}

// do while loop
// A do while loop will execute at least once, even if the condition is false.
let i = 1;
do {
  console.log("dishant is good boy");
  i++;
} while (i <= 5);

// For of loop
// For of loop using  for String
let str = "dishantsangani";
let size = 0;
for (let i of str) {
  console.log("i=", i);
  size++;
}
console.log("string size =", size);

// For in loop
// For in loop using for array and object;
let student = {
  name: "Dishant",
  age: 21,
  city: "Pune",
  country: "India",
  isPass: true,
};
for (let key in student) {
  console.log("key=", key, "value=", student[key]);
}
