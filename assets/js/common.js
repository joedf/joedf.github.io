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

function joedf(){
    var w='color:transparent;background:none';
    var b='color:#000;background:#000';
    var r='color:#F00;background:#F00';
    console.log('%cwwwwww%cbbbbbb%cwwwwwwwwwwwwwwwwwwww\n%cwwwwww%cbb%crr%cbb%cwwwwwwwwwwwwwwwwwwww\n%cwwwwww%cbb%crr%cbb%cwwwwwwwwwwwwwwwwwwww\n%cwwwwww%cbb%crr%cbb%cwwwwwwwwwwwwwwwwwwww\n%cwwwwww%cbb%crr%cbbbbbbbbbbbbbbbbbb%cwwww\n%cwwwwww%cbb%crr%cbb%crrrrrr%cbb%crrrrrr%cbb%cwwww\n%cwwwwww%cbb%crr%cbb%crr%cbb%crr%cbb%crr%cbbbbbb%cwwww\n%cwwwwww%cbb%crr%cbb%crr%cbb%crr%cbb%crrrr%cbb%cwwwwww\n%cbbbbbbbb%crr%cbb%crr%cbb%crr%cbb%crr%cbbbbbb%cwwww\n%cbb%crrrrrrrr%cbb%crrrrrr%cbb%crrrrrr%cbb%cwwww\n%cbbbbbbbbbbbbbbbbbbbbbbbbbbbb%cwwww\n%cbb%crrrr%cbbbb%crrrrrr%cbb%crr%cbb%crrrr%cbb%cwwww\n%cbb%crr%cbb%crr%cbb%crr%cbbbbbb%crr%cbb%crr%cbbbb%cwwww\n%cbb%crr%cbb%crr%cbb%crrrr%cbbbbbbbbbb%crr%cbb%cwwww\n%cbb%crrrr%cbbbb%crr%cbbbb%cwwww%cbb%crrrr%cbb%cwwww\n%cbbbbbbbbbbbbbb%cwwwwww%cbbbbbbbb%cwwww',w,b,w,w,b,r,b,w,w,b,r,b,w,w,b,r,b,w,w,b,r,b,w,w,b,r,b,r,b,r,b,w,w,b,r,b,r,b,r,b,r,b,w,w,b,r,b,r,b,r,b,r,b,w,b,r,b,r,b,r,b,r,b,w,b,r,b,r,b,r,b,w,b,w,b,r,b,r,b,r,b,r,b,w,b,r,b,r,b,r,b,r,b,r,b,w,b,r,b,r,b,r,b,r,b,w,b,r,b,r,b,w,b,r,b,w,b,w,b,w);
}

function pikachu(){
	var t='color:transparent;background:none';
	var b='color:#000;background:#000';
	var g='color:#555;background:#555';
	var w='color:#FFF;background:#FFF';
	var y='color:#FF0;background:#FF0';
	var x='color:#D3D300;background:#D3D300';
	var r='color:#FF3E3E;background:#FF3E3E';
	console.log('%ctttttttttt%cbbbb%ctttttttttttttttttt%cbb%ctttt\n%ctttttttt%cbb%cgg%cbb%ctttttttttttttttt%cbb%cyy%cbb%ctt\n%ctttttttt%cbb%cyy%cbb%ctttttttttttttt%cbb%cyy%cxxxx%cbb\n%ctttttt%cbb%cyyyy%cbb%ctttttttt%cbbbbbb%cyy%cxxxxxx%cbb\n%ctttttt%cbb%cyy%cxx%cbb%ctttt%cbbbb%cgggg%cbb%cxxxxxx%cbb%ctt\n%ctttt%cbb%cyyyyyyyy%cbbbb%cyyyy%cgg%cbb%cxxxxxx%cbb%ctttt\n%ctt%cbb%cyyyyyyyyyyyyyyyyyy%cbbbb%cxxxx%cbb%ctttttt\n%cbb%cww%cyyyyyyyyyyyyyyyy%cxx%cbb%ctt%cbb%cxxxx%cbb%ctttt\n%cbbbb%cyyyyyyyyyyyyyyyyyy%cbb%ctttt%cbb%cxx%cbb%ctttt\n%cbb%cyyyyyyyy%cww%cbb%cyyyyyyyy%cxx%cbbbb%cxx%cbb%ctttttt\n%ctt%cbb%cyyyyyy%cbbbb%crrrr%cyy%cxxxx%cbbbbbb%ctttttttt\n%ctttt%cbb%cxx%cyyyyyy%crr%cxxxxxx%cbbbbbb%ctttttttttt\n%ctt%cbb%cyy%cxxxxxxxxxxxxxxxxxxxx%cbb%ctttttttttt\n%ctttt%cbbbb%cyyyyyyyyyy%cbb%cxxxx%cbbbb%ctttttttttt\n%ctttttt%cbb%cxx%cyyyyyy%cbb%cyy%cxxxxxx%cbb%ctttttttttt\n%ctttt%cbb%cxx%cbb%cxxxxxxxx%cbb%cxxxxxx%cbb%ctttttttttt\n%ctttt%cbbbbbbbbbb%cxxxxxxxxxx%cbb%ctttttttttttt\n%ctttttttttttttt%cbbbbbb%cxx%cbbbb%ctttttttttttt\n%ctttttttttttttttt%cbb%cyyyy%cxx%cbb%ctttttttttttt\n%ctttttttttttttttttt%cbbbbbb%ctttttttttttttt',t,b,t,b,t,t,b,g,b,t,b,y,b,t,t,b,y,b,t,b,y,x,b,t,b,y,b,t,b,y,x,b,t,b,y,x,b,t,b,g,b,x,b,t,t,b,y,b,y,g,b,x,b,t,t,b,y,b,x,b,t,b,w,y,x,b,t,b,x,b,t,b,y,b,t,b,x,b,t,b,y,w,b,y,x,b,x,b,t,t,b,y,b,r,y,x,b,t,t,b,x,y,r,x,b,t,t,b,y,x,b,t,t,b,y,b,x,b,t,t,b,x,y,b,y,x,b,t,t,b,x,b,x,b,x,b,t,t,b,x,b,t,t,b,x,b,t,t,b,y,x,b,t,t,b,t);
}

/* Google Analytics */
window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}
gtag('js', new Date()); gtag('config', 'UA-121071672-1');
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src='//www.googletagmanager.com/gtag/js?id=UA-121071672-1';
g.setAttribute('async',true);
s.parentNode.insertBefore(g,s)}(document,'script'));

joedf();
console.log('Scripts loaded.');
pikachu();
console.log('Pikachu design rights to their respective owners, probably Nintendo.');
