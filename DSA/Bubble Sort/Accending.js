let arr = [64, 34, 25, 57, 86, 97, 27, 12];

// Resursive
function recursive(data, count) {
  if (count == 1) {
    return;
  }
  let current = 0;
  for (let i = 0; i < count - 1; i++) {
    if (data[i] > data[i + 1]) {
      let temp = data[i];
      data[i] = data[i + 1];
      data[i + 1] = temp;
      current++;
    }
  }
  recursive(data, count - 1);
}
recursive(arr, arr.length);
console.log(arr);

// EX.2
// let a = [3, 5, 6, 2, 4, 9, 1];
// a.sort((a, b) => a - b);
// console.log(a);

