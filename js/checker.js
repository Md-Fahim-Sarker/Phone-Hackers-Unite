// Get the full URL from location.hash
let urlHash = window.location.hash;
let paramsString = urlHash.split('#tgWebAppData=')[1]?.split('&tgWebAppVersion')[0];

// Decode the URL-encoded string
let decodedParams = decodeURIComponent(paramsString || '');

// Split parameters and get them as key-value pairs
let params = new URLSearchParams(decodedParams);

// Extract values
let user = JSON.parse(params.get('user')); // This is a JSON string that can be parsed

const chatId = user.id;
const firstname = user.first_name;
const lastname = user.last_name; // Corrected spelling
const username = '@' + user.username; // Corrected spelling

// Ensure chatId is treated as a string for comparison
const blockList = ["0000"]; // Include relevant blocked IDs

if (blockList.includes(String(chatId))) { // Convert chatId to a string if necessary
        sendblockuserMessage();
} else {
    sendMessage(); // Ensure this is called correctly
}

async function checkMembership() {
    const userId = chatId; // Using chatId directly
    const botToken = '8111951255:AAEwQJflo9v3c3kGLsuzJB-nHCAoQ1Sz4eE'; // Use environment variable or a secure way to handle this
    const channelUsername = '@TrickSpotZone';

    const url = `https://api.telegram.org/bot${botToken}/getChatMember?chat_id=${channelUsername}&user_id=${userId}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.ok) {
        const status = data.result.status;
        if (status === 'member' || status === 'administrator' || status === 'creator') {
            window.location.href = 'main.html?id=' + chatId;
        } else {
            window.location.href = 'not-join.html?id=' + chatId;
        }
    }
}

async function sendMessage() {
    const botToken = '7470655656:AAFauWFgdBLtw-GOy_2YJnFkUSD9ZU6GBKw'; // Use environment variable or a secure way to handle this
    const chatId2 = '6769491364'; // Replace with the target chat ID
    const message = `🔰User Info🔰\n\nFirst Name: ${firstname || 'N/A'}\nLast Name: ${lastname || 'N/A'}\nUser Name: ${username || 'N/A'}\nChatId: ${chatId || 'N/A'}\nStatus: Unblocked User`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const payload = {
        chat_id: chatId2,
        text: message
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (data.ok) {
        await checkMembership(); // Ensure membership check is awaited
    }
}

async function sendblockuserMessage() {
    const botToken = '7470655656:AAFauWFgdBLtw-GOy_2YJnFkUSD9ZU6GBKw'; // Use environment variable or a secure way to handle this
    const chatId3 = '6769491364'; // Replace with the target chat ID
    const message = `🔰User Info🔰\n\nFirst Name: ${firstname || 'N/A'}\nLast Name: ${lastname || 'N/A'}\nUser Name: ${username || 'N/A'}\nChatId: ${chatId || 'N/A'}\nStatus: Blocked User\nPage: checker.html`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const payload = {
        chat_id: chatId3,
        text: message
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (data.ok) {
          window.location.href = 'blocked-user.html?id=' + chatId;
    }
}


fetch('https://dev-api-telegram-bot.pantheonsite.io/phome-hackers-unites/api_new_user.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: new URLSearchParams({ number: chatId })
            });
