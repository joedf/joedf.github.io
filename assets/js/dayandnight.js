// modified from http://www.w3schools.com/js/js_cookies.asp

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
    document.cookie = cname + "=" + cvalue + "; " + expires + ';SameSite=None; Secure';
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

/////////----END---- cookie.js -----///////

function DayAndNight(autorun) {
	var theme = getCookie("theme");
	
	var cookielife = 14;

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
	
	if (autorun) {
		if (theme.contains("night")) {
			stylesheet.href = 'assets/strapdown/themes/'+night_theme+'.min.css';
			setCookie("theme","night",cookielife);
			dark_Widgets(true);
		} else {
			stylesheet.href = 'assets/strapdown/themes/'+day_theme+'.min.css';
			setCookie("theme","day",cookielife);
			dark_Widgets(false);
		}
	} else {
		if (stylesheet.href.contains(day_theme)) {
			stylesheet.href = 'assets/strapdown/themes/'+night_theme+'.min.css';
			setCookie("theme","night",cookielife);
			dark_Widgets(true);
		} else {
			stylesheet.href = 'assets/strapdown/themes/'+day_theme+'.min.css';
			setCookie("theme","day",cookielife);
			dark_Widgets(false);
		}
	}
	
	return;
}

function dark_Widgets(make_dark) {
	make_dark = (typeof make_dark !== 'undefined') ? make_dark : true
	try {
		const dark_theme_url_token = '?theme=dark';

		var widget_ids = ['github_badge', 'pocket_widget']

		for (let i = 0; i < widget_ids.length; i++) {
			const id = widget_ids[i];
			var e = document.getElementById(id);
			if (e != null) {
	
				if (make_dark) {
					if (e.src.indexOf(dark_theme_url_token) < 0) {
						e.src += dark_theme_url_token;
					}
				} else {
					if (e.src.indexOf(dark_theme_url_token) >= 0) {
						e.src = e.src.replace(dark_theme_url_token,'');
					}
				}
			}
		}
	} catch (error) {
		console.error('Could not set dark theme for Github badge.')
	}
}

;(function(){
	DayAndNight(true);
})();