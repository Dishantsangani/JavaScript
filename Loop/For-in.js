// //object
let animal = {
  name: "zebra",
  leg: 4,
};
for (let key in animal) {
  console.log(key, animal[key]);
}

//arrays
let names = ["rahul", "neha", "aman"];
for (let index in names) {
  console.log(index, names[index]);
}
