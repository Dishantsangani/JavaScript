// const person = {
//   name: "Dishant",
//   age: 22,
//   address: "Nikol",
//   hoobie: function () {
//     console.log("This is a Person 1");
//   },
// };
// console.log(person.hoobie());

// const person2 = {
//   name: "Dishant",
//   age: 22,
//   address: "Nikol",
//   hoobie: function () {
//     console.log("This is a Person 1");
//   },
// };
// console.log(person2.hoobie());

// 2 Way

function user(username, logincount, isloggedin) {
  this.username = username;
  this.logincount = logincount;
  this.isloggedin = isloggedin;
  this.greeting = function () {
    console.log(`Welcome ${this.username} `);
  };

  return this;
}
const userOne = new user("Dishant", 7, true);
const usertwo = new user("Dev", 27, false);

console.log("userOne: ", userOne.constructor);
console.log("usertwo: ", usertwo);
