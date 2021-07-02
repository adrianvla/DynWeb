/*

COPYRIGHT ADRIAN VLASOV
HTTPS://WWW.MORISINC.NET

DYNAMIC WEBPAGE ENGINE






*/
var start = setTimeout(function() {
    load();
}, 1);
var loop = setInterval(function() { tick(); }, 1);

function setTitle(text) {
    document.title = text;
}
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

var a = location.hash.replace("#", "");
var content = document.getElementById("content");

function load() {
    a = location.hash.replace("#", "");
    if (a == "" || a == "0") {
        //url_content("a/home.html").success(function(data) {
        //    content.innerHTML = data;
        //});
        content.innerHTML = read("a/home.html");
    } else {

        content.innerHTML = read("a/" + a + ".html");
    }

}


function read(remote_url) {
    return $.ajax({
        type: "GET",
        url: remote_url,
        async: false
    }).responseText;
}

var a_old = location.hash;
var a_new = location.hash;

function tick() {
    if (a_old != a_new) {
        transition();
        a_old = location.hash;

    }
    a_new = location.hash;

}


function transition() {
    load();
}