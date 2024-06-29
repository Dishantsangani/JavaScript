// Array
// An array is a special variable, which can hold more than one values in a single variable.
// let marks = [20, 27, 30, 40, 50];
// marks[2] = 66;
// console.log(marks);

// console.log(marks.length); //Property

// 2D Array
// let arr[["dishant","sangani"],["apna","collage"],["Dishant","Sangani"]];

// let heros = ["ironman", "thor", "spiderman", "hulk", "captain america"];
// console.log(heros[1]);

// Array indices

// let marks = [20, 27, 30, 40, 50];
// marks[2] = 66;
// console.log(marks);

// Looping over an array
// let heros = ["ironman", "thor", "spiderman", "hulk", "captain america"];
// for (let i = 1; i < heros.length; i++) {
//   console.log(heros[i]);
// }

// for of
// let cities = ["delhi", "mumbai", "chennai", "kolkata"];
// for (let city of cities) {
//   console.log(city.toLocaleUpperCase());
// }

//Array methods
//Push
// let food = ["Poteto", "Apple", "Banana", "Orange"];
// food.push("chips", "sweets", "cake");
// console.log(food);

// Pop
// let foods = ["Poteto", "Apple", "Banana", "Orange", "chips", "sweets", "cake"];
// console.log(foods);
// let ff = foods.pop();
// console.log(ff);
// console.log("Deeted element", ff);

// To string
// let foods = ["Poteto", "Apple", "Banana", "Orange", "chips", "sweets", "cake"];
// console.log(foods);
// console.log(foods.toString());

//Concat
// let hero = [" ironman", "thor", "spiderman", "hulk", "captain america"];
// let dc = [" batman", "superman", "wonderwoman", "aquaman"];
// let indian = ["dhoni", "kohli", "rohit", "raina", "ganguly"];
// let hero2 = hero.concat(dc, indian);
// console.log(hero2);

//unshift
// let marval = [" ironman", "thor", "spiderman", "hulk", "captain america"];
// marval.unshift("black panther");
// console.log(marval);

//Shift
// let marvel = [" ironman", "thor", "spiderman", "hulk", "captain america"];
// marvel.shift();
// console.log(marvel);

//Slice
// let marvals = [
//   " ironman",
//   "thor",
//   "spiderman",
//   "hulk",
//   "captain america",
//   "Dishant",
//   true,
//   false,
//   undefined,
//   27,
// ];

// console.log(marvals);
// // console.log(marvals.slice(2));
// console.log(marvals.slice(1, 4));

//Splice
// let marvels1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// marvels1.splice(1, 2, 27, 368);

// Add element
// marvels1.splice(2, 0, 101);

//delete element
// marvels1.splice(3, 1);

// Replace element
// marvels1.splice(3,1,101);
// console.log(marvels1);
