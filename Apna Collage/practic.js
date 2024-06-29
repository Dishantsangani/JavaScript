// let num = prompt("enter a number:");
// if (num % 5 === 0) {
//   console.log(num, "is multiple of 5");
// } else {
//   console.log(num, "is not multiple of 5");
// }

// // Q2 Write a code which give grade to studen according to their Scores
// let Scores = prompt("Enter Scores:");
// let grade;
// if (Scores >= 90 && Scores <= 100) {
//   grade = "A";
// } else if (Scores >= 80 && Scores <= 89) {
//   grade = "B";
// } else if (Scores >= 70 && Scores <= 79) {
//   grade = "C";
// } else if (Scores >= 60 && Scores <= 69) {
//   grade = "D";
// } else if (Scores >= 50 && Scores <= 59) {
//   grade = "E";
// } else if (Scores >= 40 && Scores <= 49) {
//   grade = "F";
// } else {
//   grade = "Invalid";
// }
// console.log("According to your scores, your grade is :", grade);

// loops
// Q1 Print all even number from 0 to 100
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     //even number
//     // if(i%2!==0){ odd number
//     console.log(i);
//   }
// }

// Q2 create a game where you start with any random game number.ask the user to keep guessing the game number untill the user enters correct value.
// let gameNum = 25;
// let userNum = prompt("Guess the game number");
// while (userNum != gameNum) {
//   userNum = prompt("You entered wrong number , try again");
// }
// document.write("congrations , you entered the right number");

// string method
// Q1. Prompt the user to enter their full name. generate a username for them based on the input start username with @ , followed by thier full name and ending with the fullname length

// let fullname = prompt("Enter your full name");
// let username = "@" + fullname + fullname.length;
// console.log(username);

// Arrays
// Q1. for a given array with marks of student [85, 90, 95, 80, 85] find out the average marks of the entire class
// let marks = [85, 90, 95, 80, 85];
// let sum = 0;
// for (let val of marks) {
//   sum += val;
// }
// let avg = sum / marks.length;
// console.log(avg);

// Q2.for a given array with price of 5 items [250,645,300,900,50] all itms have an offer of 10% off on then. change the array to store final price after applying offer
//Using for of loop
// let item = [250, 645, 300, 900, 50];
// let idx = 0;
// for (let val of item) {
//   let offer = val / 10;
//   item[idx] = item[idx] - offer;
//   console.log(`value after offer ${item[idx]}`);
//   idx++;
// }

// Using simple for loop
// for (let i = 0; i < item.length; i++) {
//   let offer = item[i] / 10;
//   item[i] -= offer;
// }
// console.log(item);

// Arrays

// q1.Create an array to store companies bloomberg microsoft uber goggle ibm netflix
// Rrmove the first compay from the array
// let companies = ["bloomberg", "microsoft", "uber", "goggle", "ibm", "netflix"];
// companies.shift();
// console.log(companies);

// q2.Remove ubar & Add ola in its place
// companies.splice(2, 1, "ola");
// console.log(companies);

// Q3. Add amazon at the end
// companies.push("amazon");
// console.log(companies);

// Function and object
// // q1. Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in that string
// const cont = () => {
//   function count(str) {
//     for (const char of str) {
//       if (
//         char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u"
//       ) {
//         console.log(char);
//       }
//     }
//     return count;
//   }
// };

//q2. for a given array of numbers print the square of each value the foreach loop
//Callback function
// let nums = [67, 52, 39];
// let calcsquare = (num) => {
//   console.log(num * num);
// };
// nums.forEach(calcsquare);
// nums.forEach((num) => {
//   console.log(num * num);
// });

// Class & Object
// Q1. You Are creating a website for your collage. create a class user with 2 properties,name & email. it also has a method called viewdata() that allows user to view website data.
// let data = "secret information";
// class user {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   viewData() {
//     console.log("Website data =", data);
//   }
// }
// let student1 = new user("shradha", "abc@gmail.com");
// let student2 = new user("Rahul Kumar", "rahulkumar@yahoo.com");
// let techer1 = new user("dean", "dean@gmail.com ");

// Q2. create a new class called Admin which inherits from User. Add a new Method Called editData to Admin that allows it to edit website data
// let data = "secret information";
// class user {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   viewData() {
//     console.log("Website data =", data);
//   }
// }

// class Admin extends user {
//   constructor(name, emamil) {
//     super(name, emamil);
//   }
//   editdata() {
//     data = "Some added by Dishant sangani";
//   }
// }
// let student1 = new user("shradha", "abc@gmail.com");
// let student2 = new user("Rahul Kumar", "rahulkumar@yahoo.com");

// let techer1 = new user("dean", "dean@gmail.com ");

// let admin1 = new Admin("dishant", "admin123@gmail.com");

// API
// Q1. Sending post request

// Dom Interview
// let clbtn = document.querySelector("button");

// clbtn.addEventListener("click", dev);

// function dev() {
//   let name = prompt("Enter name");
//   clbtn.textContent = "Roll No. 1 :" + name;
// }

