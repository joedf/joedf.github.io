
function DayAndNight(autorun) {
	var theme = strapdown_store.get('theme');
	var day_theme = "yeti";
	var night_theme = "darkly";
	if (!autorun) {
		var new_theme = (theme == day_theme)?(night_theme):(day_theme);
		set_theme(new_theme);
		theme = new_theme;
	}

	//
	if (autorun) {
		var stylesheet = document.createElement("link");
		stylesheet.setAttribute('rel','stylesheet');
		stylesheet.setAttribute('href','assets/css/strapdown_joedf.css');
		document.body.appendChild(stylesheet);
	}
	
	//extra css fix for blockquote
	var color = ((theme==night_theme)?'070707':'F7F7F7');
	console.log(theme, color);
	if (document.getElementById('DayAndNight') == null) {
		cs = document.createElement("style");
		cs.setAttribute('id','DayAndNight');
		cs.innerHTML = 'blockquote{background-color:#'+color+';}';
		document.body.appendChild(cs);
	} else {
		cs = document.getElementById('DayAndNight');
		cs.innerHTML = 'blockquote{background-color:#'+color+' !important;}';
	}
}

;(function(){
	DayAndNight(true);
})();