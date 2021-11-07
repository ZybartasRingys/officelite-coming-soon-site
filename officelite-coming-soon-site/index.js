const emailInput = document.getElementById("email");
const submitbtn = document.getElementById("submit");

const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitbtn.addEventListener("click", emailValidation);

function emailValidation(email) {
  if (emailInput.value.match(re)) {
    
  }
}
