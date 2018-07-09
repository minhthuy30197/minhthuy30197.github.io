window.addEventListener('scroll', scrollPage);
var nav = document.querySelector('nav');
var menu_content = document.querySelector('.menu-content');
var menu2 = document.querySelector('.menu2');
var shopping_cart = document.querySelector('.shopping-cart');

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

function scrollPage(e) {
	var last_menu_item = document.querySelector('#last-menu-item');
	if ((window.scrollY - menu_content.clientHeight) > nav.offsetTop) {
		last_menu_item.classList.add('dropdown');
		last_menu_item.innerHTML = '<a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' +
		'<i class="fas fa-user-circle"></i> <span class="caret"></span>' + 
		'</a> <ul class="dropdown-menu"> '+
		'<li>Login</li>' + 
		'<li>Sign in</li>' + 
		'</ul>';		
		menu2.classList.add('container-fluid');
		nav.classList.add('container', 'fixed-navbar');
		shopping_cart.style.visibility = 'visible';
		shopping_cart.style.opacity = 1;
	} else {
		last_menu_item.classList.remove('dropdown');
		last_menu_item.innerHTML = '<a href="cart.html"><i class="fas fa-shopping-cart"></i></a>';		
		menu2.classList.remove('container-fluid');
		nav.classList.remove('container','fixed-navbar');
		shopping_cart.style.visibility = "hidden";
		shopping_cart.style.opacity = 0;
	}
}

function openSearch() {
	document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
	document.getElementById("myOverlay").style.display = "none";
}

function openCompare() {
	document.getElementById("compare-table").style.display = "block";
}

function closeCompare() {
	document.getElementById("compare-table").style.display = "none";
}


