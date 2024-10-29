//  Dates
let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let mycreate = new Date(2023, 0, 23);
console.log(mycreate.toDateString());

let mytime = Date.now();
console.log(mytime);
console.log(mytime.getMonth());
console.log(mytime.getDay());
