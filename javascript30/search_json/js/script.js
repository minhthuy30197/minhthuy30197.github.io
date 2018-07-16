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

let items = document.querySelectorAll('.drop-item');
let nav = document.querySelector('.menu');
let background = document.querySelector('.background');
items.forEach(item => item.addEventListener('mouseover', overItem));
items.forEach(item => item.addEventListener('mouseout', outItem));

function overItem() {
	this.classList.add('dropdown-display');
	background.classList.add('bg-display');
	setTimeout(() => {
		if (this.classList.contains('dropdown-display')) {
			this.classList.add('dropdown-appear');
			let pos_item = this.querySelector('.dropdown').getBoundingClientRect();
			let pos_nav = nav.getBoundingClientRect();
			let pos_bg = {
				width: pos_item.width,
				height: pos_item.height,
				top: pos_item.top - pos_nav.top,
				left: pos_item.left - pos_nav.left
			}
			background.classList.add('bg-appear');
			background.style.setProperty('width', `${pos_item.width}px`);
			background.style.setProperty('height', `${pos_item.height}px`);
			background.style.setProperty('transform', `translate(${pos_item.left}px, ${pos_item.top}px`);
		}
	}, 300);
}

function outItem() {
	this.classList.remove('dropdown-display', 'dropdown-appear');
	background.classList.remove('bg-display', 'bg-appear');
}