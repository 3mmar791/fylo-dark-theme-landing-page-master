document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
let email = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
email.oninput = function () {
  emailValue = email.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(emailValue)) {
    errorMessage.textContent = ""; // Clear any previous error message
    // Perform form submission or other actions here
  } else {
    errorMessage.textContent = "Invalid email address";
  }
  // console.log(email.value);
};
// console.log(email);
