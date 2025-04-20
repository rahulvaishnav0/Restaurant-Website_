document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulating form validation
        const username = loginForm.username.value.trim();
        const password = loginForm.password.value.trim();

        if (username === '' || password === '') {
            errorMessage.textContent = 'Please enter both username and password.';
        } else if (username !== 'demo' || password !== 'demo123') {
            errorMessage.textContent = 'Invalid username or password. Please try again.';
        } else {
            // Normally, this is where you would handle form submission to the server
            // For example, you can redirect to another page or show a success message
            // For demo purposes, we'll just show an alert
            alert(`Logged in as ${username}`);
            loginForm.reset(); // Clear form fields
            errorMessage.textContent = ''; // Clear error message
        }
    });
});
