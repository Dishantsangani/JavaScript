let clickmebtn = document.querySelector("button");
clickmebtn.addEventListener("click", inputMsg);

function inputMsg() {
  let name = prompt("enter name of student");
  clickmebtn.textContent = "roll no.27:" + name;
}
