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
	var cheatcode = new Konami(function() { alert('Konami Code!')});
});

/* Google Analytics */
window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}
gtag('js', new Date()); gtag('config', 'UA-121071672-1');
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src='https://www.googletagmanager.com/gtag/js?id=UA-121071672-1';
s.parentNode.insertBefore(g,s)}(document,'script'));

