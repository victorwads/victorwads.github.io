// if(window.location.protocol == 'http:')
// 	window.location.protocol = 'https:';

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

//Google Analytics
ga('create', 'UA-104206956-1', 'auto');
ga('send', 'pageview');

//private Analytics
(function (){
	var serverHost = "https://server.privateanalytics.kavi.ga/";
	function s4() {return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);}
	var SUID = s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
	var type = "SendAcesso";
	var token;
	function request(init){
		json = {
			SUID: SUID,
			URL: window.location.href,
			type: init===undefined ? 1 : 0
		};
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("POST", serverHost);
		xmlhttp.setRequestHeader("Content-Type", "application/json");
		xmlhttp.send(token+'\n'+type+'\n'+JSON.stringify(json));
	}
	request(true);
	setInterval(request, 5000);
})();