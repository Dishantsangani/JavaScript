let myvar = 34;
let myvar2 = 35;
let myvar3 = 36;
let myvar4 = 37;
let myvar5 = 38;

let dishant = {
  name: "dishant",
  age: 20,
  price: "200",
  salary: 1000,
};
console.log(dishant);

let names = new Array(1, 2, 3, "Dishant", undefined);
console.log(names.length);
names = names.sort();
names.push("sangani");
console.log(names);
//concat
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num_more = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let dev = [12, 16, 27, 22];
let newArray = num.concat(num_more, dev);
console.log(newArray);
