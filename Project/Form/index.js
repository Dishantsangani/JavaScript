function collectData() {
  var firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let dateOfBirth = document.getElementById("dateOfBirth").value;
  let gender = document.getElementById("gender").value;
  // //Storing data
  // localStorage.setItem("firstName", firstName);
  // localStorage.setItem("lastName", lastName);
  // localStorage.setItem("email", email);
  // localStorage.setItem("password", password);
  // localStorage.setItem("dateofbirth", dateOfBirth);
  // localStorage.setItem("gender", gender);
  let formData = {
    firstName,
    lastName,
    email,
    password,
    dateOfBirth,
    gender,
  };
  // console.log(formData);
  let myJsonstr = JSON.stringify(formData);
  localStorage.setItem("formData", myJsonstr);
  console.log(localStorage);
  // lastName.setItem("formData", myJsonstr
  // var jsonData = JSON.stringify(formData);
  // let demo = localStorage.setItem("formData", jsonData);
  // console.log(demo);
}
function validateForm(data) {
  let firstName = data.firstName.trim();
  var lastName = data.lastName.trim();

  // alert("Form Submiteed Sucessfully");
}
