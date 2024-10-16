// 1.Accending
let Accending = [20, 12, 56, 3, 27, 59, 75, 58];
function Accend(data) {
  // That Min Id is First Value = 20
  let minId;
  // That For Loop Iterat Outer Values  = [20, 12, 56, 3, 27, 59]
  for (let i = 0; i < data.length; i++) {
    // 20
    minId = i;
    //That Secound Value to start value
    for (let j = i + 1; j < data.length; j++) {
      //  12 < 20
      if (data[j] < data[minId]) {
        minId = j;
      }
    }
    let temp = data[minId];
    data[minId] = data[i];
    data[i] = temp;
  }
}
Accend(Accending);
console.log("Accending", Accending);

// 2. Decending
let Decending = [20, 12, 56, 3, 27, 59, 75, 58];
function Decend(data) {
  // That Min Id is First Value = 20
  let minId;
  // That For Loop Iterat Outer Values  = [20, 12, 56, 3, 27, 59]
  for (let i = data.length - 1; i >= 0; i--) {
    // 20
    minId = i;
    //That Secound Value to start value
    for (let j = i - 1; j >= 0; j--) {
      //  12 < 20
      if (data[j] < data[minId]) {
        minId = j;
      }
    }

    let temp = data[minId];
    data[minId] = data[i];
    data[i] = temp;
  }
}
Decend(Decending);
console.log("Decending", Decending);

// Ex.2
// Accending Decending in array

// let arr = [6, 9, 5, 8, 4, 7, 3, 2, 1];
// let acc = arr.sort();
// console.log("Accending", acc);

// // Decending
// let arr2 = [6, 9, 5, 15, 8, 4, 7, 3, 2, 1];
// let dec = arr2.sort((a, b) => b - a);
// console.log("Decending", dec);
