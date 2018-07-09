const endpoint = "https://cdn.rawgit.com/minhthuy30197/minhthuy30197.github.io/25b87e86/icecream_shop/json/icecreams.json";
var infos = [];
fetch(endpoint) 
	.then(obj => obj.json())
	.then(data => infos.push(...data));

window.onload = function() {
	getList(infos);
}