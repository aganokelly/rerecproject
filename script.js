// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulating login logic
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        window.location.assign('dashboard.html');

        // Redirect to another page or perform further actions
    } else {
        alert('Invalid username or password');
    }
});
    