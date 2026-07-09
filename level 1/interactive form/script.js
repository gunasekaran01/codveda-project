const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");

const successMessage = document.getElementById("successMessage");


const inputs = document.querySelectorAll("input");

inputs.forEach(function(input) {

    input.addEventListener("focus", function() {
        input.style.backgroundColor = "#eef6ff";
    });

    input.addEventListener("blur", function() {
        input.style.backgroundColor = "#ffffff";
    });

});

form.addEventListener("submit", function(event) {

    event.preventDefault();

  
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;


    if (nameInput.value.trim() === "") {

        nameError.textContent = "Name is required.";
        isValid = false;

    } else if (nameInput.value.trim().length < 3) {

        nameError.textContent = "Name should contain at least 3 characters.";
        isValid = false;

    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailInput.value.trim() === "") {

        emailError.textContent = "Email is required.";
        isValid = false;

    } else if (!emailPattern.test(emailInput.value.trim())) {

        emailError.textContent = "Enter a valid email address.";
        isValid = false;

    }

   
    const phonePattern = /^[0-9]{10}$/;

    if (phoneInput.value.trim() === "") {

        phoneError.textContent = "Phone number is required.";
        isValid = false;

    } else if (!phonePattern.test(phoneInput.value.trim())) {

        phoneError.textContent = "Phone number must contain 10 digits.";
        isValid = false;

    }

    const password = passwordInput.value;

    if (password === "") {

        passwordError.textContent = "Password is required.";
        isValid = false;

    } else if (password.length < 8) {

        passwordError.textContent = "Password must be at least 8 characters.";
        isValid = false;

    } else if (!/[A-Z]/.test(password)) {

        passwordError.textContent = "Include at least one uppercase letter.";
        isValid = false;

    } else if (!/[0-9]/.test(password)) {

        passwordError.textContent = "Include at least one number.";
        isValid = false;

    }

    if (confirmPasswordInput.value === "") {

        confirmError.textContent = "Please confirm your password.";
        isValid = false;

    } else if (password !== confirmPasswordInput.value) {

        confirmError.textContent = "Passwords do not match.";
        isValid = false;

    }

    if (isValid) {

        successMessage.textContent = "Registration Successful!";

        form.reset();

    }

});