document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy login check (replace with real authentication logic)
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        // Redirect or perform further actions
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password!';
    }
});
