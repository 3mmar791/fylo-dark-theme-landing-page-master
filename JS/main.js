// document
//   .getElementById("emailForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the form from submitting

//     const emailInput = document.getElementById("email");
//     const email = emailInput.value;
//     const errorMessage = document.getElementById("error-message");

//     // Regex pattern for email validation
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     // Validate the email
//     if (emailPattern.test(email)) {
//       errorMessage.textContent = ""; // Clear any previous error message
//       // Perform form submission or other actions here
//     } else {
//       errorMessage.textContent = "Invalid email address";
//       errorMessage.style.display = "block";
//     }
//   });
