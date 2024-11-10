
        document.getElementById('telegramForm').addEventListener('submit', function (event) {
            event.preventDefault();

            const message = document.getElementById('message').value;
            const chatId = document.getElementById('chatId').value;
            const token = '6310109803:AAHUt4ZUHhqyqrG4Ld50A6gb4LxGZgE8LXQ'; // Replace with your bot's token

            const url = `https://api.telegram.org/bot${token}/sendMessage`;
            const data = {
                chat_id: chatId,
                text: message
            };

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(result => {
                    document.getElementById('responseMessage').innerText = 'Message sent successfully!';
                    document.getElementById('responseMessage').style.color = 'green';
                    document.getElementById('message').value = '';
                    document.getElementById('chatId').value = '';
                })
                .catch(error => {
                    console.error('Error:', error);
                    document.getElementById('responseMessage').innerText = 'Failed to send message.';
                    document.getElementById('responseMessage').style.color = 'red';
                });
        });

document.getElementById('telegramFormall').addEventListener('submit', function (event) {
    event.preventDefault();

    const allmessage = document.getElementById('allmessage').value;
    const token = '6310109803:AAHUt4ZUHhqyqrG4Ld50A6gb4LxGZgE8LXQ'; // Replace with your bot's token
    const chatIdsUrl = 'https://md-fahim-sarker.github.io/Phone-Hackers-Unite/data/chat_ids.txt'; // URL to the chat IDs list

    // Fetch the chat IDs from the external file
    fetch(chatIdsUrl)
        .then(response => response.text())
        .then(chatIdsText => {
            const chatIds = chatIdsText.trim().split('\n'); // Split chat IDs by newlines
            
            chatIds.forEach(chatId => {
                const url = `https://api.telegram.org/bot${token}/sendMessage`;
                const data = {
                    chat_id: chatId.trim(), // Ensure no extra spaces
                    text: allmessage
                };

                // Send message to each chat ID
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(result => {
                    console.log(`Message sent successfully to all chat ids`);
                })
                .catch(error => {
                    console.error(`Failed to send message to all chat ids. Error:`, error);
                });
            });
            
            document.getElementById('responseMessage2').innerText = 'Messages sent successfully!';
            document.getElementById('responseMessage2').style.color = 'green';
            document.getElementById('allmessage').value = '';
        })
        .catch(error => {
            console.error('Error fetching chat IDs:', error);
            document.getElementById('responseMessage2').innerText = 'Failed to send messages.';
            document.getElementById('responseMessage2').style.color = 'red';
        });
});