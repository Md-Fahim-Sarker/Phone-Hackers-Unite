
const loginForm = document.getElementById('loginForm');
const errorDiv = document.getElementById('error');

const SESSION_KEY = 'sessionExpiration';
const EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 1 day in milliseconds

function checkSession() {
    const sessionExpiration = localStorage.getItem(SESSION_KEY);
    if (sessionExpiration) {
        const now = new Date().getTime();
        if (now > parseInt(sessionExpiration)) {
            localStorage.removeItem(SESSION_KEY);
            return false;
        }
        return true;
    }
    return false;
}

function setSession() {
    const now = new Date().getTime();
    const expirationTime = now + EXPIRATION_TIME;
    localStorage.setItem(SESSION_KEY, expirationTime);
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'AdminFahim') { // Basic example, not secure
        setSession();
        window.location.href = 'dashboard.html'; // Redirect to a welcome page
    } else {
        errorDiv.textContent = 'Invalid username or password';
    }
}

loginForm.addEventListener('submit', handleLogin);

window.onload = function() {
    if (checkSession()) {
        window.location.href = 'dashboard.html'; // Redirect to welcome page if session is valid
    }
};