// Events in js
// The change in the state of an object is known as an events
// Events are fired to notify code of "interesting changes" that may affect code executon

// Mouse Events (Click, Double Click, etc..)
// inline Event Handling

// Event Object
// it is a spacial object that has details about the event
// All event handlers have access to the event object properties and methods
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
//   console.log("btn1 was clicked");
// };

// // 2 EXAMPLE
// let div = document.querySelector("#box");
// div.onmouseover = (evt) => {
// console.log("Dishant Sangani");
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
// };

// Event Listeners
// node.addEventlistener(event, callback, useCapture)
// btn1.addEventListener("click", () => {
//   console.log("Dishant Sangani-  handler 11");
// });

// btn1.addEventListener("click", () => {
//   console.log("Dishant Sangani-  handler 22");
// });

// btn1.addEventListener("click", () => {
//   console.log("Dishant Sangani-  handler 33");
// });

// btn1.addEventListener("click", () => {
//   console.log("Dishant Sangani-  handler 44");
// });

// node.removeEventListener(event, callback, useCapture)
btn1.removeEventListener("Click", () => {
  console.log();
});
