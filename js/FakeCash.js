const urlParams = new URLSearchParams(window.location.search);
const chatid = urlParams.get('id');


function gotonagadsendmony() {
window.location.href = 'nagad.html?id=' + chatid;
}

function gotonagadhomemony() {
window.location.href = 'nagad-home.html?id=' + chatid;
}

function gotobkashsendmony() {
window.location.href = 'bkash.html?id=' + chatid;
}

function gotobkashhomemony() {
window.location.href = 'bkash-home.html?id=' + chatid;
}

function gotomychatid() {
window.location.href = 'general.html?general=mychatid&id=' + chatid;
}



function gotomychatid() {
window.location.href = 'general.html?general=mychatid&id=' + chatid;
}


function gotomychatid() {
window.location.href = 'general.html?general=mychatid&id=' + chatid;
}



function backtoindex() {
    window.history.back();
}