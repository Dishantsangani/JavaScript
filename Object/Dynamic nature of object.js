const circle = {
  radius: 1,
};
// Never Reassign Object
circle = {};

//Adding Some Properties
circle.name = "dishant";
circle.drew = function () {};

//Deleting Some Properties
delete circle.name;
delete circle.drew;

console.log(circle);
