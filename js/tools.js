const urlParams = new URLSearchParams(window.location.search);
const tools = urlParams.get('tools');
const resultDiv = document.getElementById('result');

if (tools === 'url-shorter') {
  document.title = "Url Shortener";
  document.getElementById("hi-text").textContent = "URL Shortener";
  document.getElementById("submit-button").textContent = "Generate";
  document.getElementById("input-text").placeholder = "Enter long link here";
} else if (tools === 'ip-info') {
  document.title = "IP Info🔎";
  document.getElementById("hi-text").textContent = "IP Info🔎";
  document.getElementById("submit-button").textContent = "Get Info";
  document.getElementById("input-text").placeholder = "Enter IP address here";
}

async function fetchInfo(event) {
  event.preventDefault();
  if (tools === 'url-shorter') {
    urlshorter();
  } else if (tools === 'ip-info') {
    fetchIpInfo();
  }
}

function urlshorter() {
  const urlInput = document.getElementById('input-text').value;
  if (urlInput) {
    shortenUrl(urlInput);
  } else {
    displayError("Please enter a valid URL.");
  }
}

async function getIpInfo(ip) {
  const apiUrl = `https://ipapi.co/${ip}/json/`;
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    console.error("Error fetching IP info:", error);
    displayError("Failed to Get IP info.");
  }
}

function fetchIpInfo() {
  const ip = document.getElementById('input-text').value;
  if (ip) {
    getIpInfo(ip).then(ipInfo => {
      if (ipInfo && ipInfo.network) {
        const reply = `🔎IP Information:<br>` +
              `IP: ${ipInfo.ip}<br>` +
              `Network: ${ipInfo.network}<br>` +
              `Version: ${ipInfo.version}<br>` +
              `City: ${ipInfo.city}<br>` +
              `Region: ${ipInfo.region}<br>` +
              `Region Code: ${ipInfo.region_code}<br>` +
              `Country: ${ipInfo.country}<br>` +
              `Country Name: ${ipInfo.country_name}<br>` +
              `Country Code: ${ipInfo.country_code}<br>` +
              `Country Code ISO3: ${ipInfo.country_code_iso3}<br>` +
              `Country Capital: ${ipInfo.country_capital}<br>` +
              `Country TLD: ${ipInfo.country_tld}<br>` +
              `Continent Code: ${ipInfo.continent_code}<br>` +
              `In EU: ${ipInfo.in_eu}<br>` +
              `Postal: ${ipInfo.postal}<br>` +
              `Latitude: ${ipInfo.latitude}<br>` +
              `Longitude: ${ipInfo.longitude}<br>` +
              `Timezone: ${ipInfo.timezone}<br>` +
              `UTC Offset: ${ipInfo.utc_offset}<br>` +
              `Country Calling Code: ${ipInfo.country_calling_code}<br>` +
              `Currency: ${ipInfo.currency}<br>` +
              `Currency Name: ${ipInfo.currency_name}<br>` +
              `Languages: ${ipInfo.languages}<br>` +
              `Country Area: ${ipInfo.country_area}<br>` +
              `Country Population: ${ipInfo.country_population}<br>` +
              `ASN: ${ipInfo.asn}<br>` +
              `Org: ${ipInfo.org}`;
        resultDiv.innerHTML = reply;
        resultDiv.className = 'message success';
        resultDiv.style.display = 'block';
      } else if (ipInfo.error) {
     displayError(ipInfo.reason);
      } else {
        displayError("Invalid IP address or IP information not found.");
      }
    });
  } else {
    displayError("Please enter a valid IP address.");
  }
}

function shortenUrl(url) {
  const apiUrl = 'https://tinyurl.com/api-create.php?url=' + encodeURIComponent(url);
  
  fetch(apiUrl)
    .then(response => response.text())
    .then(shortenedUrl => {
      document.getElementById('result').textContent = "🔗Shortened URL: " + shortenedUrl;
      resultDiv.className = 'message success';
      resultDiv.style.display = 'block';
    })
    .catch(error => {
      console.error('Error shortening URL:', error);
      displayError("Failed to shorten the URL.");
    });
}

function displayError(message) {
  resultDiv.textContent = message;
  resultDiv.className = 'message error';
  resultDiv.style.display = 'block';
}

function backtoindex() {
  window.history.back();
}
