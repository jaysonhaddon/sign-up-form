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
        error = createError();
        form.appendChild(error);
      }
    } else {
      form.removeChild(error);
      error = undefined;
    }
  }
}

function createError() {
  tmp = document.createElement("p");
  tmp.setAttribute("id", "error");
  tmp.setAttribute("class", "error");
  tmp.textContent = "* Passwords do not match!";
  return tmp;
}
