const loginForm = document.getElementById('loginForm');
const errorDiv = document.getElementById('error');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Send login details to backend for validation
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            alert(`Welcome, ${data.name}!`);
        } else {
            const error = await response.text();
            errorDiv.textContent = error;
        }
    } catch (err) {
        errorDiv.textContent = 'An error occurred while connecting to the server.';
    }
});