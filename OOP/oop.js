// const user = {
//   name: "Dishant",
//   loginCount: 8,
//   signedIn: true,

//   getuser: function () {
//     console.log("hello");
//     console.log(this);
//   },
// };
// console.log(user.getuser());

function user(username, loginCount, islogged) {
  this.username = username;
  this.loginCount = loginCount;
  this.islogged = islogged;
  return this;
}
const userone = user("Dishant", 27, true);
const usertwo = user("dev", 56, true);
console.log("userone: ", userone);
console.log("userone: ", usertwo);
