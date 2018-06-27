const endpoint = "https://cdn.rawgit.com/minhthuy30197/minhthuy30197.github.io/655000a1/javascript30/search_json/data.json";
let infos = [];
fetch(endpoint) 
	.then(obj => obj.json())
	.then(data => console.log(data));