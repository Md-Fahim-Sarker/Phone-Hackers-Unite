
    const token = '6310109803:AAHUt4ZUHhqyqrG4Ld50A6gb4LxGZgE8LXQ'; // Replace with your bot token

    function confirmSetWebhook() {
        if (confirm('Are you sure you want to set this webhook?')) {
            setTelegramWebhook();
        }
        return false; // Prevent the form from submitting normally
    }

    function confirmRemoveWebhook() {
        if (confirm('Are you sure you want to remove the webhook?')) {
            removeTelegramWebhook();
        }
        return false; // Prevent the form from submitting normally
    }

    function setTelegramWebhook() {
        const url = `https://api.telegram.org/bot${token}/setWebhook`;
        const webhookUrl = document.getElementById('webhook_url').value;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: webhookUrl }),
        })
        .then(response => response.json())
        .then(data => {
            const messageElem = document.getElementById('setWebhookMessage');
            if (data.ok) {
                messageElem.textContent = 'Webhook set successfully!';
                messageElem.classList.add('success');
            } else {
                messageElem.textContent = 'Failed to set webhook.';
            }
            setTimeout(() => messageElem.textContent = '', 5000); // Clear message after 5 seconds
        })
        .catch((error) => {
            const messageElem = document.getElementById('setWebhookMessage');
            messageElem.textContent = 'Error setting webhook.';
            console.error('Error:', error);
        });
    }

    function removeTelegramWebhook() {
        const url = `https://api.telegram.org/bot${token}/deleteWebhook`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            const messageElem = document.getElementById('removeWebhookMessage');
            if (data.ok) {
                messageElem.textContent = 'Webhook removed successfully!';
                messageElem.classList.add('success');
            } else {
                messageElem.textContent = 'Failed to remove webhook.';
            }
            setTimeout(() => messageElem.textContent = '', 5000); // Clear message after 5 seconds
        })
        .catch((error) => {
            const messageElem = document.getElementById('removeWebhookMessage');
            messageElem.textContent = 'Error removing webhook.';
            console.error('Error:', error);
        });
    }

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