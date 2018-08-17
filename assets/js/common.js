// https://stackoverflow.com/a/950146/883015
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

loadScript('assets/js/konami/konami.js', function(){
	var cheatcode = new Konami(function() { alert('Konami Code!'); happiness(); });
});

function happiness(){
	var emojis = [0x1F31E,0x1F36D,0x1F308,0x1F984,0x1F60E];
	emojis.forEach(function(p,i,a){a[i]=String.fromCodePoint(p)})
	var style = 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)';
	console.log('%c '+emojis[0]+'Sunshine, '+emojis[1]+'Lollipops and '+emojis[2]+'Rainbows!', style);
	console.log('%c '+emojis[3]+emojis[3]+emojis[3]+' Unicorns! Yaaasssss! '+emojis[4], style);
}

/* Google Analytics */
window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}
gtag('js', new Date()); gtag('config', 'UA-121071672-1');
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src='//www.googletagmanager.com/gtag/js?id=UA-121071672-1';
g.setAttribute('async',true);
s.parentNode.insertBefore(g,s)}(document,'script'));

