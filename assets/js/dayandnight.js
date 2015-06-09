//from  http://www.w3schools.com/js/js_cookies.asp

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

/////////----END---- cookie.js -----///////

function DayAndNight(autorun) {
	var theme = getCookie("theme");

	var day_theme = "simplex2";
	var night_theme = "cyborg2";

	var stylesheet = null;
	var items = document.getElementsByTagName('link');
	for (i=0;i<items.length;i++) {
		if (items[i].href.contains("strapdown/themes")) {
			stylesheet = items[i];
			break;
		}
	}

	var autobool = (theme.contains("night") && autorun);

	if (autobool || stylesheet.href.contains(day_theme)) {
		stylesheet.href = 'assets/strapdown/themes/'+night_theme+'.min.css';
		setCookie("theme","night",14);
	} else {
		stylesheet.href = 'assets/strapdown/themes/'+day_theme+'.min.css';
		setCookie("theme","day",14);
	}
	
	return;
}

;(function(){
	DayAndNight(true);
})();