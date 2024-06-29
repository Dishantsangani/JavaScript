// synce in js
// Synchronous means the code run in a particuar sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.

// Asynchronous in js
// Due to synchronous programming sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.
// Asynchronous code execution allows to execute next instructions immediately and dosen't block the flow.

// SetTimeout
// Ex.1
// function dev() {
//   console.log("Hello Everyone");
// }
// setTimeout(dev, 2000);

// Ex.2
// setTimeout(() => {
//   console.log("Dishat");
// }, 1000);

// Callbacks
// A calback is a function passed as an argument to another function

// function sum(a, b) {
//   console.log(a + b);
// }
// function cal(a, b, sumcallback) {
//   sumcallback(a, b);
// }
// cal(5, 7, sum);

// Callback Hell
// Nested Callbacks stacked below one another forming a pyramid Structure.(Pyramif of Doom)
// This style of Programming Becomes Difficult to understand & Manage.
// Ex.1
// function getdata(dataid) {
//   setTimeout(() => {
//     console.log("data", dataid);
//   }, 2000);
// }
// getdata();

// Ex.2
// function getdata(dataid, getnextdata) {
//   setTimeout(() => {
//     console.log("data", dataid);
//     if (getnextdata) {
//       getnextdata();
//     }
//   }, 2000);
// }
// getdata(1, () => {
//   console.log("Fetching Name...");
//   getdata(2, () => {
//     console.log("Fetching Password...");
//     getdata(3, () => {
//       console.log("User Was Founded 🤝🏻");
//       getdata(4,()=>{
//         console.log("User accessing DataBase..");
//       });
//     });
//   });
// });

// Promises
// Promises is for "Eventual" Completion of task. it is an object in js.
// it is a solution to callback hell.
// A javascript Promise Object can Be:
// Pending : the reslut is undefined
// Resolved : the result is a value(fullfilled)
// Rejected : the result is an Error object

// let promise = new Promise((resolve, reject) => {
//   console.log("i ama dishant");
//   resolve("Dishant"); // resolve the promise
//   reject("Dishant"); // reject the promise
// });

// Ex.1
// function getdata(dataid, getnextdata) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log("data", dataid);
//       // resolve("success");
//       reject("error");
//       if (getnextdata) {
//         getnextdata();
//       }
//     }, 5000);
//   });
// }

// Promises = .then , .catch
// Promises.then((res)=>{...})
// Promises.catch((res)=>{...})

// Ex.2
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am A Promise");
//     resolve("success");
//     // reject("Network error");
//   });
// };
// let promise = getPromise();
// promise.then((res) => {
//   console.log("Promise Fullfield", res);
// });
// promise.catch((err) => {
//   console.log("Rejected", err);
// });

// Promise Chain
function getdata(dataid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataid);
      resolve("success");
    }, 3000);
  });
}
getdata(1)
  .then((res) => {
    return getdata(2);
  })
  .then((res) => {
    return getdata(3);
  })
  .then((res) => {
    console.log("success");
  });
