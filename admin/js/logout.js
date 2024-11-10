
        function checkLogin() {
            const sessionExpiration = localStorage.getItem('sessionExpiration');
            if (!sessionExpiration || new Date().getTime() > parseInt(sessionExpiration)) {
                localStorage.removeItem('sessionExpiration');
                window.location.href = 'login.html'; // Redirect to login page
            }
        }

        function logout() {
            localStorage.removeItem('sessionExpiration');
            window.location.href = 'login.html'; // Redirect to login page
        }

        checkLogin();