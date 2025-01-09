const Form = document.querySelector(".form");
const eyeMore = document.getElementById("eye-img-more");
const inputMore = document.querySelector(".sing_up-password-more");
const inputTel = document.querySelector(".sing_up-tel");
const input = document.querySelector(".sing_up-password");
const eye = document.getElementById("eye-img");
function show() {
  if (input.type == "password") {
    input.type = "text";
    eye.src = "./eye-open.png";
  } else {
    input.type = "password";
    eye.src = "./eye-close.png";
  }
}
function showMore() {
  if (inputMore.type == "password") {
    inputMore.type = "text";
    eyeMore.src = "./eye-open.png";
  } else {
    inputMore.type = "password";
    eyeMore.src = "./eye-close.png";
  }
}
function validatePassword() {
  var password = document.getElementById("password");
  var confirm_password = document.getElementById("confirm_password");
  var password_error = document.getElementById("password_error");

  if (password.value != confirm_password.value) {
    password_error.textContent = "Passwords don't match";
    confirm_password.setCustomValidity("Passwords don't match");
  } else {
    password_error.textContent = "";
    confirm_password.setCustomValidity("");
  }
}

const elBtnMore = document.querySelector(".btn_more");
const infoSection = document.querySelector(".info");
const markazSection = document.querySelector(".markazlar-2");
elBtnMore.addEventListener("click", click);
let count = false;

function click() {
  if (count == false) {
    infoSection.style = "display: none;";
    markazSection.style = "display : none";
    count = true;
  } else if (count == true) {
    infoSection.style = "display: inline-block";
    markazSection.style = "display : inline-block";
    count = false;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".burger-btn");
  const burgerMenu = document.querySelector(".burger-menu");

  burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("open"); // .open klassini qo'shadi yoki olib tashlaydi
  });
});
