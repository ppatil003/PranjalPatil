document.addEventListener('DOMContentLoaded', () => {
  const passwordField = document.getElementById('password');
  const passwordDescription = document.getElementById('passwordDescription');
  const registrationForm = document.getElementById('registrationForm');

  // Show the password description when the password field is focused
  passwordField.addEventListener('focus', () => {
      passwordDescription.style.display = 'block';
  });

  // Hide the password description when the password field loses focus
  passwordField.addEventListener('blur', () => {
      passwordDescription.style.display = 'none';
  });

  // Form submission event listener
  registrationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Clear previous error messages
      document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

      let username = document.getElementById('username').value.trim();
      let email = document.getElementById('email').value.trim();
      let phone = document.getElementById('phone').value.trim();
      let password = document.getElementById('password').value.trim();
      let confirmPassword = document.getElementById('confirmPassword').value.trim();

      let isValid = true;

      // Username validation
      if (username === "") {
          document.getElementById("usernameError").textContent = "Username is required";
          isValid = false;
      }

      // Email validation
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (email === "" || !emailRegex.test(email)) {
          document.getElementById("emailError").textContent = "Please enter a valid email address";
          isValid = false;
      }

      // Phone number validation
      const phonePattern = /^[0-9]{10}$/;
      if (phone === "" || !phonePattern.test(phone)) {
          document.getElementById("phoneError").textContent = "Please enter a valid 10-digit phone number";
          isValid = false;
      }

      // Password validation
      const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@])[A-Za-z\d&$#@]{8,}$/;
      if (password === "" || !passwordPattern.test(password)) {
          document.getElementById("passwordError").textContent = "Password must be at least 8 characters long, contain at least one uppercase letter, one digit, and one special character (&,$,#,@).";
          isValid = false;
      }

      // Confirm password validation
      if (confirmPassword === "" || password !== confirmPassword) {
          document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
          isValid = false;
      }

      if (isValid) {
          // Show the success modal
          $('#successModal').modal('show');
          // Optionally, reset the form here
          // registrationForm.reset();
      }
  });
});
