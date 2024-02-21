const marks = [];
function calculategrade(marks) {
  const average = calculateaverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}
function calculateaverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}
