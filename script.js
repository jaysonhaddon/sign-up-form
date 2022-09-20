const pwdField = document.querySelector("#pwd");
const pwdConfirmField = document.querySelector("#pwd-confirm");
const form = document.querySelector("#form");
let error;

pwdField.addEventListener("change", comparePasswords);
pwdConfirmField.addEventListener("change", comparePasswords);

function comparePasswords() {
  password = pwdField.value;
  confirmPassword = pwdConfirmField.value;

  if (password != "" && confirmPassword != "") {
    if (password != confirmPassword) {
      if (error == undefined) {
        error = document.createElement("p");
        error.setAttribute("id", "error");
        error.setAttribute("class", "error");
        error.textContent = "* Passwords do not match!";
        form.appendChild(error);
      }
    } else {
      form.removeChild(error);
      error = undefined;
    }
  }
}
