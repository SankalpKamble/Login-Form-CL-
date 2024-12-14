function validateForm(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    // Reset error messages
    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.style.display = 'block';
        return false;
    }

    // Password validation
    if (password.length < 8) {
        passwordError.style.display = 'block';
        return false;
    }

    // If validation passes
    alert('Form submitted successfully!');
    return true;
}
document.addEventListener('DOMContentLoaded', function() {
    const eyeButton = document.getElementById('eyeButton');
    const passwordInput = document.getElementById('password');

    eyeButton.addEventListener('click', function() {
        // Toggle password visibility
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeButton.classList.remove('fa-eye-slash');   //Adding open eye icon = password visible
            eyeButton.classList.add('fa-eye');
        } else {
            passwordInput.type = 'password';
            eyeButton.classList.remove('fa-eye');
            eyeButton.classList.add('fa-eye-slash');   //Adding closed eye icon = password hidden
        }
    });
});