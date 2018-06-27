const endpoint = "https://rawgit.com/minhthuy30197/minhthuy30197.github.io/master/javascript30/search_json/data.json";
let infos = [];
fetch(endpoint) 
	.then(obj => obj.json())
	.then(data => console.log(data));