// Get the full URL from location.hash
let urlHash = window.location.hash;
let paramsString = urlHash.split('#tgWebAppData=')[1].split('&tgWebAppVersion')[0];

// Decode the URL encoded string
let decodedParams = decodeURIComponent(paramsString);

// Split parameters and get them as key-value pairs
let params = new URLSearchParams(decodedParams);

// Extract values
let user = JSON.parse(params.get('user')); // This is a JSON string that can be parsed


const urlParams = new URLSearchParams(window.location.search);
const chat2 = user.id;
const chatid = chat2;

function gotocamara() {
window.location.href = 'acco.html?tools=camara&id=' + chatid;
}

function gotomychatid() {
window.location.href = 'general.html?general=mychatid&id=' + chatid;
}

function gotoacchack() {
window.location.href = 'account.html?id=' + chatid;
}

function gotodevyoutub() {
window.location.href = 'general.html?general=devyoutub&id=' + chatid;
}

function gotodevinfo() {
window.location.href = 'general.html?general=devinfo&id=' + chatid;
}

function gotohelp() {
window.location.href = 'general.html?general=help&id=' + chatid;
}

function gotocommandlist() {
window.location.href = 'general.html?general=commandlist&id=' + chatid;
}

function gotobotinfo() {
window.location.href = 'general.html?general=botinfo&id=' + chatid;
}