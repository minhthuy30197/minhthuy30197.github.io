const endpoint = "https://cdn.rawgit.com/minhthuy30197/minhthuy30197.github.io/3342a96d/icecream_shop/json/icecreams.json";
var infos = [];
fetch(endpoint) 
	.then(obj => obj.json())
	.then(data => infos.push(...data));

window.onload = function() {
	getList(infos);
}