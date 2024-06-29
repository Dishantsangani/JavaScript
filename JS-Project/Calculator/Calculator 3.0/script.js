function calculate() {
  var a = parseInt(document.getElementById("maths").value);
  var b = parseInt(document.getElementById("english").value);
  var c = parseInt(document.getElementById("eng").value);
  var d = parseInt(document.getElementById("guj").value);
  var e = parseInt(document.getElementById("ss").value);
}
if (a >= 100 || b >= 100 || c >= 100 || d >= 100 || e >= 100) {
  alert("Enter Valid Values");
} else {
  var total = a + b + c + d + e;
  document.getElementById("getMarks".innerHTML - total);
  var per = (total / 500) * 100;
  document.getElementById(("getPercentage".innerHTML = per));
}
if (a >= 35 && b >= 35 && c >= 35 && d >= 35 && e >= 35) {
  document.getElementById(
    ("Rmarks".innerHTML = "<span style='color:green'><b>Pass</b></span>")
  );
} else {
  document.getElementById("Rmarks").innerHTML =
    "<span style='color:red'><b>Fail</b></span>";
}
if (per >= 90) {
  document.getElementById("grade").innerHTML = "A+";
} else if (per >= 80) {
  document.getElementById("grade").innerHTML = "A";
} else if (per >= 60) {
  document.getElementById("grade").innerHTML = "B";
} else if (per >= 50) {
  document.getElementById("grade").innerHTML = "C";
} else if (per >= 35) {
  document.getElementById("grade").innerHTML = "D";
} else {
  document.getElementById("grade").innerHTML = "D";
}
