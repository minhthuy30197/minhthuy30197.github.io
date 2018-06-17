window.onload = function() {
	var url = location.search.substring(1);
	url = decodeURIComponent(url).replace(/\+/g,' ');
	var paras = url.split('&');
	for (var i=0; i<paras.length; i++) {
		var values = paras[i].split('=');
		$('#'+values[0]).text(values[1]);
	}
}