function validateFields() {
  const emailValid = isEmailValid();
  form.forgetPassword().disabled = !emailValid;
  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
  const email = form.email().value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function isPasswordValid() {
  const password = form.password().value;
  if (!password) {
    return false;
  }
  return true;
}

function login() {
  showLoading();
  firebase
    .auth()
    .signInWithEmailAndPassword(form.email().value, form.password().value)
    .then((response) => {
      hideLoading();
      window.location.href = "pages/ponto/ponto.html";
    })
    .catch((error) => {
      hideLoading();
      alert(getErrorMessage(error));
    });
}

function getErrorMessage(error) {
  if (error.code === "auth/invalid-credential") {
    return "Usuário não encontrado";
  }
  return error.message;
}

function passwordForgot() {
  window.location.href = "pages/forgot-password/password.html";
}

function passwordReset() {
  alert("Em email foi enviado para você.");
  window.location.href = "/./index.html";
}

const form = {
  email: () => document.getElementById("email"),
  forgetPassword: () => document.getElementById("forget-password"),
  password: () => document.getElementById("password"),
  loginButton: () => document.getElementById("login-button"),
  passwordReset: () => document.getElementById("password-reset"),
};
