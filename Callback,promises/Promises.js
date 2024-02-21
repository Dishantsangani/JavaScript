// const getpromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     // reject("network error");
//     resolve("success");
//   });
// };
// let promise = getpromise();
// promise.then((res) => {
//   console.log("promise full fileds", res);
// });
// promise.catch((err) => {
//   console.log("rejected", err);
// });
// function getdata(dataId, getnextdata) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       if (getnextdata) {
//         getnextdata();
//       }
//     }, 5000);
//   });
// }
// callback hell
// getdata(1, () => {
//   console.log("Hi dishant How are you");
//   getdata(2, () => {
//     console.log("Hi apnacollage How are you");
//     getdata(3, () => {
//       console.log("Hi shivika How are you");
//       getdata(4);
//     });
//   });
// });

// Asynce
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data");
//       resolve("success");
//     }, 4000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data");
//       resolve("success");
//     }, 4000);
//   });
// }
// console.log("Featching data1... ");
// asyncFunc1().then((res) => {
//   console.log("Featching data2...");
//   p2 = asyncFunc2().then((res) => {});
// });

// Pronsise chain
// function getdata(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 5000);
//   });
// }

// // Promise chain
// getdata(1).then((res) => {
//   console.log(res);
// });

// Promise chain 2
// getdata(1)
//   .then((res) => {
//     return getdata(2);
//   })
//   .then((res) => {
//     return getdata(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });
