function initMap() {
	var uluru = { lat: 21.0156784, lng: 105.8451308 };
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}

const endpoint1 = "https://cdn.rawgit.com/minhthuy30197/minhthuy30197.github.io/3342a96d/icecream_shop/json/icecreams.json";
var infos = [];
fetch(endpoint1) 
	.then(obj => obj.json())
	.then(data => infos.push(...data));

const endpoint2 = "https://cdn.rawgit.com/minhthuy30197/minhthuy30197.github.io/560cbb43/icecream_shop/json/special.json";
var specials = [];
fetch(endpoint2) 
	.then(obj => obj.json())
	.then(data => specials.push(...data));

window.onload = function() {
	getList(specials);
}







