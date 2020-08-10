const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    e.target["email-phone"].value != "admin@gmail.com" ||
    e.target.psw.value != "admin"
  ) {
    document.querySelector(".error").style.display = "block";
  } else {
    form.submit();
  }
});
