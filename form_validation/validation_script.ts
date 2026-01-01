
// Get form
const form = document.getElementById("userForm") as HTMLFormElement;

// Inputs
const username = document.getElementById("username") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const confirmPassword = document.getElementById("confirmPassword") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const address = document.getElementById("address") as HTMLInputElement;
const numberInput = document.getElementById("number") as HTMLInputElement;

// Error elements
const usernameError = document.getElementById("usernameError") as HTMLElement;
const passwordError = document.getElementById("passwordError") as HTMLElement;
const confirmPasswordError = document.getElementById("confirmPasswordError") as HTMLElement;
const emailError = document.getElementById("emailError") as HTMLElement;
const addressError = document.getElementById("addressError") as HTMLElement;
const numberError = document.getElementById("numberError") as HTMLElement;

/* =========================
   REGEX PATTERNS
========================= */

const usernameRegex: RegExp = /^[A-Za-z]+$/;
const passwordRegex: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.com$/;
const numberRegex: RegExp = /^9\d{9}$/;

/* =========================
   HELPER FUNCTIONS
========================= */

function showError(input: HTMLInputElement, errorEl: HTMLElement, message: string): void {
  errorEl.textContent = message;
  input.classList.add("error-input");
}

function clearError(input: HTMLInputElement, errorEl: HTMLElement): void {
  errorEl.textContent = "";
  input.classList.remove("error-input");
}

/* =========================
   FORM SUBMIT
========================= */

form.addEventListener("submit", (event: Event): void => {
  event.preventDefault();

  let isValid: boolean = true;

  // Username (no numbers)
  if (!usernameRegex.test(username.value)) {
    showError(username, usernameError, "Username must contain letters only");
    isValid = false;
  } else {
    clearError(username, usernameError);
  }

  // Password (strong)
  if (!passwordRegex.test(password.value)) {
    showError(
      password,
      passwordError,
      "Password must include uppercase, lowercase, number & symbol"
    );
    isValid = false;
  } else {
    clearError(password, passwordError);
  }

  // Confirm Password (match)
  if (confirmPassword.value !== password.value || confirmPassword.value === "") {
    showError(confirmPassword, confirmPasswordError, "Passwords do not match");
    isValid = false;
  } else {
    clearError(confirmPassword, confirmPasswordError);
  }

  // Email (.com only)
  if (!emailRegex.test(email.value)) {
    showError(email, emailError, "Please Enter a valid email");
    isValid = false;
  } else {
    clearError(email, emailError);
  }

  // Address
  if (address.value.trim() === "") {
    showError(address, addressError, "Address is required");
    isValid = false;
  } else {
    clearError(address, addressError);
  }

  // Number (starts with 9, 10 digits)
  if (!numberRegex.test(numberInput.value)) {
    showError(numberInput, numberError, "Please Enter a valid number");
    isValid = false;
  } else {
    clearError(numberInput, numberError);
  }

  // Final success
  if (isValid) {
    window.location.href = "welcome.html";
  }
});
