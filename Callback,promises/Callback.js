// callback in js
function dev() {
  console.log("Dishant Sangani");
}
function greet(x, y, callback) {
  console.log(x - y);
  callback();
}
var a = 30;
var b = 3;
greet(a, b, dev);
