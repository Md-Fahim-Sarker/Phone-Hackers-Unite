
        // Tab switching logic
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
                // Add active class to the clicked tab
                tab.classList.add('active');
                
                // Hide all form containers
                document.querySelectorAll('.form-container').forEach(form => form.classList.remove('active'));
                // Show the selected form container
                document.getElementById(tab.dataset.tab).classList.add('active');
            });
        });

        // Form submission with AJAX for a smoother UX
        document.getElementById('addForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const chatId = document.getElementById('chat_ids').value;
            const messageDiv = document.getElementById('addMessage');

            fetch('https://dev-api-telegram-bot.pantheonsite.io/phome-hackers-unites/api_banned_user.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                      number: chatId,
                     action: 'store' // Ensure 'store' is a string
        })
            })
            .then(response => response.text())
            .then(data => {
                messageDiv.textContent = data;
                messageDiv.className = 'message success';
                document.getElementById('addForm').reset();
            })
            .catch(error => {
                messageDiv.textContent = 'Error: ' + error;
                messageDiv.className = 'message error';
            });
        });

        document.getElementById('removeForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const chatId = document.getElementById('remove_chat_ids').value;
            const messageDiv = document.getElementById('removeMessage');

            fetch('https://dev-api-telegram-bot.pantheonsite.io/phome-hackers-unites/api_banned_user.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                      number: chatId,
                      action: 'remove' // Ensure 'store' is a string
        })
            })
            .then(response => response.text())
            .then(data => {
                messageDiv.textContent = data;
                messageDiv.className = 'message success';
                document.getElementById('removeForm').reset();
            })
            .catch(error => {
                messageDiv.textContent = 'Error: ' + error;
                messageDiv.className = 'message error';
            });
        });