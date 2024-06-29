// const p = fetch("https://cat-fact.herokuapp.com/facts");
// p.then((value1) => {
//   console.log(value1.status);
//   console.log(value1.ok);
//   return value1.json();
// }).then((value2) => {
//   console.log(value2);
// });

// Using Async Await To Fetch API
const api = "https://goweather.herokuapp.com/weather/ny";
const fatt = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getff = async () => {
  console.log("Fetching Database..");
  let response = await fetch(api);
  console.log(response);
  let data = await response.json();
  fatt.innerText = data.text;
};
btn.addEventListener("click", getff);
