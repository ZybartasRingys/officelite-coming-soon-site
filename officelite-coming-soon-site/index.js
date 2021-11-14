const emailInput = document.getElementById("email");
const form = document.getElementById("form");
const submitbtn = document.getElementById("submit");
const errorMsg = document.getElementById("error-msg");
const arrowDown = document.getElementById("arrow");
const select = document.getElementById("select");

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function emailValidation() {
  if (emailInput.value.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    errorMsg.classList.remove("active");
    emailInput.style.color = "black";
  } else {
    // errorMsg.classList.toggle("active");
    form.classList.remove("valid");
    form.classList.add("invalid");
    emailInput.style.color = "#F05B5B";
    errorMsg.classList.add("active");
  }
}

select.addEventListener("click", () => {
  arrowDown.classList.toggle("active");
});
