// faname = key
// dishant = values
var a = {
  fname: "dishant",
  lname: "sangani",
  age: 20,
  email: "dev@gmail.com",
  favMovies: ["dhoom", "animal,", "dishant"],
  living: {
    city: "chandigadh",
    country: ["india", "ahemdabad"],
  },
  salary: function () {
    return 200000;
  },
};

//Adding Some Element In object
a.nationality = "indian";

console.log(a);
// //   console.log(a.fname);
// document.write(a.fullname());
// document.write(a.gender());
// document.write(a.living.country[1]);
