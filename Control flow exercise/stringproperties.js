const movie = {
  title: "a",
  releaseyear: 2018,
  rating: 4.5,
  director: "b",
};
showproperties(movie);
function showproperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
}
