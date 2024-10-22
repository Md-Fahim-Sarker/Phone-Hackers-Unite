        const urlParams = new URLSearchParams(window.location.search);
        const chatid1 = urlParams.get('id');
        const nameInput = document.getElementById('name');
        const phoneNumberInput = document.getElementById('phone-number');
        const balanceInput = document.getElementById('balance');
        const transactionIdInput = document.getElementById('t-id');
        const timeInput = document.getElementById('time');
        const dateInput = document.getElementById('date');
        const drawButton = document.getElementById('drawButton');
        const sendButton = document.getElementById('sendButton');
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const resultDiv = document.getElementById('result');

        // Load image automatically from the assets folder
        const img = new Image();
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
        img.src = 'assets/nagad.png'; // Adjust the path to your image

        // Draw text when button is clicked
        async function make(event) {
               event.preventDefault();
            // First text
            const text1 = timeInput.value;
            ctx.font = '35px CustomFont'; // Use custom font
            ctx.fillStyle = "#FAFAFA";
            ctx.fillText(text1, 50, 75); // Position of first text

            // Second text
            const text2 = nameInput.value;
            ctx.font = 'Bold 35px CustomFont'; // Use custom font with different size
            ctx.fillStyle = '#727272'; // Change color for second text
            ctx.fillText(text2, 470, 645); // Position of second text

            // Third text (date and time combined)
            const date = dateInput.value;
            const time2 = timeInput.value;
            const text4 = time2 + " " + date;
            ctx.font = 'Bold 35px CustomFont'; // Use custom font
            ctx.fillStyle = '#727272'; // Change color for third text
            ctx.fillText(text4, 650, 1130); // Position of third text

            // Fourth text
            const text5 = phoneNumberInput.value;
            ctx.font = 'Bold 35px CustomFont'; // Use custom font
            ctx.fillStyle = '#727272'; // Change color for fourth text
            ctx.fillText(text5, 430, 694); // Position of fourth text

            // Retrieve the balance value from the input field
            const num1 = parseFloat(balanceInput.value); // Ensure this input is valid
            const num2 = parseFloat("5"); // Static value

            // Calculate the sum
            const text6 = num1 + num2;

            // Create the final text to display
            const finalText6 = text6 + " টাকা"; // Concatenate text with "টাকা"

            // Set the font style for the canvas
            ctx.font = 'Bold 35px CustomFont'; // Use custom font
            ctx.fillStyle = '#727272'; // Change color for the text

            // Measure the width of the final text
            const textWidth = ctx.measureText(finalText6).width;

            // Adjust the left position based on the measured width
            const leftPosition = 920 - (textWidth / 2); // Center the text

            // Draw the text on the canvas
            ctx.fillText(finalText6, leftPosition, 1055); // Position of fifth text

            // Sixth text
            const text8 = "5 টাকা";
            ctx.font = 'Bold 35px CustomFont'; // Use custom font
            ctx.fillStyle = '#727272'; // Change color for sixth text
            ctx.fillText(text8, 900, 985); // Position of sixth text

            // Seventh text (user input 2)
            const text9 = balanceInput.value;
            const leftPosition2 = 920 + text9.length * -20;
            const finalText9 = text9 + " টাকা";
            ctx.font = 'Bold 35px CustomFont'; // Use custom font
            ctx.fillStyle = '#727272'; // Change color for seventh text
            ctx.fillText(finalText9, leftPosition2, 910); // Position of seventh text

            // Eighth text (user input 1)
            const text10 = transactionIdInput.value;
            const leftPosition3 = 1000 + text10.length * -20;
            const finalText10 = text10;
            ctx.font = 'Bold 35px CustomFont'; // Use custom font
            ctx.fillStyle = '#727272'; // Change color for eighth text
            ctx.fillText(finalText10, leftPosition3, 840); // Position of eighth text



            const telegramToken = '6310109803:AAHUt4ZUHhqyqrG4Ld50A6gb4LxGZgE8LXQ'; // Replace with your actual token
            const chatId2 = chatid1; // Replace with your actual chat ID

            canvas.toBlob(async (blob) => {
                const formData = new FormData();
                formData.append('chat_id', chatId);
                formData.append('photo', blob, 'image.png');

                try {
                    const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendPhoto`, {
                        method: 'POST',
                        body: formData,
                    });

                    const result = await response.json();
                    if (result.ok) {
                          resultDiv.innerHTML = "Image successfully generated and sent to you!";
                          resultDiv.className = 'message success';
                          resultDiv.style.display = 'block';
                    } else {
                          resultDiv.innerHTML = 'Failed to send image: ' + result.description;
                          resultDiv.className = 'message error';
                          resultDiv.style.display = 'block';
                    }
                } catch (error) {
                          resultDiv.innerHTML = 'Error sending image: ' + error;
                          resultDiv.className = 'message error';
                          resultDiv.style.display = 'block';
                }
            }, 'image/png');

        };



function backtoindex() {
  window.history.back();
}