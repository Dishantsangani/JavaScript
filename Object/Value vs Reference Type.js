// Pass by value VS Pass by Refernce

//1. Pass by Value
let a = 5;
let b = a;
b = a + 5;
console.log(a);
console.log(b);

//2. Pass by Refernce in OBJECT
let obj1 = {
  name: "dishant",
  pass: "devsangani",
};
let obj2 = obj1;

//2.1 Adding New Value in Object
obj2.pass = "Hello Everyone";

console.log(obj1);
console.log(obj2);

//3. Pass By Refernce in Array
let arr1 = [1, 2, 3];
let arr2 = arr1;
//3.1 Adding New Value in Array
arr2.push(4);

console.log(arr2);
