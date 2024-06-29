// Asynce
// Asynce function always returns a promise.
// async function myfunc(){...}

// Await
// Await pauses the execution of its surrounding async until the promise is settled.

// Ex.1
// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather data");
//       resolve(200);
//     }, 2000);
//   });
// }
// async function getweatherdata() {
//   await api();
//   await api();
// }

// Ex.2
// function getdata(dataid) {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       console.log("data"), dataid;
//       reslove("success");
//     }, 2000);
//   });
// }

// async function getalldata() {
//   console.log("getting data1....");
//   await getdata(1);
//   console.log("getting data2....");
//   await getdata(2);
//   console.log("getting data3....");
//   await getdata(3);
//   console.log("getting data4....");
//   await getdata(4);
//   console.log("getting data5....");
//   await getdata(5);
// }
// getalldata();

// iife:immediately invoked function expression
// iife is a function that is called immediately as soon as it is defined.
// (function(){
// })
// (async function () {
//   console.log("getting data1....");
//   await getdata(1);
//   console.log("getting data2....");
//   await getdata(2);
//   console.log("getting data3....");
//   await getdata(3);
//   console.log("getting data4....");
//   await getdata(4);
//   console.log("getting data5....");
//   await getdata(5);
// })();
