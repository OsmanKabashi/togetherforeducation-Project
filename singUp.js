function showPassword() {
  var passwordInput = document.getElementById("password");
  var passwordValue = passwordInput.value;
  passwordInput.value = passwordValue.replace(/./g, "*");
}