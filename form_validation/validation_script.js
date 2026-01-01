// Get form
var form = document.getElementById("userForm");
// Inputs
var username = document.getElementById("username");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var email = document.getElementById("email");
var address = document.getElementById("address");
var numberInput = document.getElementById("number");
// Error elements
var usernameError = document.getElementById("usernameError");
var passwordError = document.getElementById("passwordError");
var confirmPasswordError = document.getElementById("confirmPasswordError");
var emailError = document.getElementById("emailError");
var addressError = document.getElementById("addressError");
var numberError = document.getElementById("numberError");
/* =========================
   REGEX PATTERNS
========================= */
var usernameRegex = /^[A-Za-z]+$/;
var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
var emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
var numberRegex = /^9\d{9}$/;
/* =========================
   HELPER FUNCTIONS
========================= */
function showError(input, errorEl, message) {
    errorEl.textContent = message;
    input.classList.add("error-input");
}
function clearError(input, errorEl) {
    errorEl.textContent = "";
    input.classList.remove("error-input");
}
/* =========================
   FORM SUBMIT
========================= */
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var isValid = true;
    // Username (no numbers)
    if (!usernameRegex.test(username.value)) {
        showError(username, usernameError, "Username must contain letters only");
        isValid = false;
    }
    else {
        clearError(username, usernameError);
    }
    // Password (strong)
    if (!passwordRegex.test(password.value)) {
        showError(password, passwordError, "Password must include uppercase, lowercase, number & symbol");
        isValid = false;
    }
    else {
        clearError(password, passwordError);
    }
    // Confirm Password (match)
    if (confirmPassword.value !== password.value || confirmPassword.value === "") {
        showError(confirmPassword, confirmPasswordError, "Passwords do not match");
        isValid = false;
    }
    else {
        clearError(confirmPassword, confirmPasswordError);
    }
    // Email (.com only)
    if (!emailRegex.test(email.value)) {
        showError(email, emailError, "Please Enter a valid email");
        isValid = false;
    }
    else {
        clearError(email, emailError);
    }
    // Address
    if (address.value.trim() === "") {
        showError(address, addressError, "Address is required");
        isValid = false;
    }
    else {
        clearError(address, addressError);
    }
    // Number (starts with 9, 10 digits)
    if (!numberRegex.test(numberInput.value)) {
        showError(numberInput, numberError, "Please Enter a valid number");
        isValid = false;
    }
    else {
        clearError(numberInput, numberError);
    }
    // Final success
    if (isValid) {
        window.location.href = "welcome.html";
    }
});
