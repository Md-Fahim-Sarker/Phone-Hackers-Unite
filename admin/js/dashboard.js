const botToken = '6310109803:AAHUt4ZUHhqyqrG4Ld50A6gb4LxGZgE8LXQ'; // Replace with your Telegram Bot Token
const chatIdsUrl = 'https://md-fahim-sarker.github.io/Phone-Hackers-Unite/data/chat_ids.txt'; // URL to the chat IDs file
const blockChatIdsUrl = 'https://md-fahim-sarker.github.io/Phone-Hackers-Unite/data/banned_users.txt'; // URL to the blocked chat IDs file

async function fetchChatIds(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        return text.split('\n').map(id => id.trim()).filter(id => id);
    } catch (error) {
        console.error('Error fetching chat IDs:', error);
        return [];
    }
}

async function fetchUserInfo(chatId) {
    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/getChat?chat_id=${chatId}`);
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error('Error fetching user info:', error);
        return null;
    }
}

async function fetchUserProfilePhoto(chatId) {
    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/getUserProfilePhotos?user_id=${chatId}`);
        const data = await response.json();
        if (data.result.photos.length > 0) {
            const photo = data.result.photos[0][0];
            const fileId = photo.file_id;
            const fileResponse = await fetch(`https://api.telegram.org/bot${botToken}/getFile?file_id=${fileId}`);
            const fileData = await fileResponse.json();
            const filePath = fileData.result.file_path;
            return `https://api.telegram.org/file/bot${botToken}/${filePath}`;
        }
        return null;
    } catch (error) {
        console.error('Error fetching user profile photo:', error);
        return null;
    }
}

async function displayUserInfo() {
    const userInfoContainer = document.getElementById('user-info');
    userInfoContainer.innerHTML = '<h2>User Information</h2>';

    const [chatIds, blockChatIds] = await Promise.all([
        fetchChatIds(chatIdsUrl),
        fetchChatIds(blockChatIdsUrl),
    ]);

    const blockChatIdSet = new Set(blockChatIds);

    for (const chatId of chatIds) {
        const userInfo = await fetchUserInfo(chatId);
        const userPhotoUrl = await fetchUserProfilePhoto(chatId);
        if (userInfo) {
            const isBlocked = blockChatIdSet.has(chatId) ? 'Blocked' : 'Unblocked';

            const userElement = document.createElement('div');
            userElement.className = 'user-info';

            userElement.innerHTML = `
                <img src="${userPhotoUrl || 'assets/profile.png'}" alt="Profile Photo">
                <div>
                    <p><strong>ID:</strong> ${userInfo.id}</p>
                    <p><strong>First Name:</strong> ${userInfo.first_name || 'N/A'}</p>
                    <p><strong>Last Name:</strong> ${userInfo.last_name || 'N/A'}</p>
                    <p><strong>Username:</strong> @${userInfo.username || 'N/A'}</p>
                    <p><strong>Type:</strong> ${userInfo.type}</p>
                    <p><strong>Status:</strong> ${isBlocked}</p>
                </div>
            `;

            userInfoContainer.appendChild(userElement);
        }
    }
}

displayUserInfo();