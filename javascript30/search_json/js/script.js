const endpoint = "https://cdn.rawgit.com/minhthuy30197/minhthuy30197.github.io/549b4c37/javascript30/search_json/data.json";
let infos = [];
let input = document.getElementById('search');
let suggestion = document.querySelector('.suggestion');

input.addEventListener('change', displayInfo);
input.addEventListener('keyup', displayInfo);

fetch(endpoint) 
.then(obj => obj.json())
.then(data => infos.push(...data));

function matchInfo(findContent) {
	let regex = new RegExp(findContent,'gi');
	let result = infos.filter(info => info.name.match(regex));
	return result;
}

function displayInfo() {
	let results = matchInfo(this.value);
	let html = '';
	if (results.length != 0 && input.value != '') {
		results.forEach(result => {
			html += '<li class="sug-item"><div class="name">'+result.name+'</div><div class="age">'+result.age+'</div><div class="clear"></div></li>';
		});
	}
	suggestion.innerHTML = html;
}