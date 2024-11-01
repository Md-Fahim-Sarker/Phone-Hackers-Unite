const urlParams = new URLSearchParams(window.location.search);
const chatid = urlParams.get('id');

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