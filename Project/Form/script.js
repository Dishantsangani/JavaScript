function greet() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dateOfBirth = document.getElementById("dateOfBirth").value;
  const gender = document.getElementById("gender").value;

  let userdata = new Array();
  userdata = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    userdata.some((v) => {
      return v.email == email;
    })
  ) {
    alert("Duplicate Dataaaa");
  } else {
    userdata.push({
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
      gender,
    });

    localStorage.setItem("users", JSON.stringify(userdata));
  }

  // alert("Form Submitted Successfully");
}
