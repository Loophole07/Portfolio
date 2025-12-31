"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Get form and elements
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const output = document.getElementById("output");
const nameError = document.getElementById("nameError");
const ageError = document.getElementById("ageError");
// Form submit event
form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page refresh
    // Clear previous errors
    nameError.textContent = "";
    ageError.textContent = "";
    output.textContent = "";
    // Read values
    const name = nameInput.value.trim();
    const age = Number(ageInput.value);
    let valid = true;
    // Name validation
    if (!name) {
        nameError.textContent = "Name is required";
        valid = false;
    }
    else if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters";
        valid = false;
    }
    // Age validation
    if (!ageInput.value) {
        ageError.textContent = "Age is required";
        valid = false;
    }
    else if (age <= 0 || age > 120) {
        ageError.textContent = "Age must be between 1 and 120";
        valid = false;
    }
    // If valid, show output
    if (valid) {
        output.textContent = `Hello ${name}, you are ${age} years old!`;
        form.reset();
    }
});
//# sourceMappingURL=form_script.js.map