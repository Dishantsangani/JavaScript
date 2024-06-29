// Simple Technique
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();
  console.log(data);
}
getData();

// Asynve & Await Technique
// async function getData() {
//   console.log("start");
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
//   console.log("found data");
//   const data = await res.json();
//   console.log(data);
//   console.log("end");
// }
// getData();

// // new  using Try And Catch
// async function mydata() {
//   try {
//     const sp1 = await step1();
//     console.log(sp1);
//     const sp2 = await addMaterial();
//     console.log(sp2);
//     const sp3 = await addMilk();
//     console.log(sp3);
//     const sp4 = await drink();
//     console.log(sp4);
//   } catch (error) {
//     console.log(error);
//   }
// }
