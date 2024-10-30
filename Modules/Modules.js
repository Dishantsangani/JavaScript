const hello = () => {
  console.log("hello Dishant ");
};
module.exports = hello;

const ahello = (name) => {
  console.log("hello Dishant" + name);
};
module.exports = { hello, ahello };
