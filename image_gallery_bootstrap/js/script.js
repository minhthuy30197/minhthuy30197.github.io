window.addEventListener('scroll', scrollPage);
let thumbnails = document.querySelectorAll('.thumb');

function scrollPage(e) {
	thumbnails.forEach(thumbnail => {
		let halfImg = (window.scrollY + window.innerHeight) - thumbnail.clientHeight/2; 
		let bottomImg = thumbnail.offsetTop + thumbnail.clientHeight;
		let isScrollHalfImg = halfImg > thumbnail.offsetTop;
		let isNotScrollPast = window.scrollY < bottomImg;
		if (isNotScrollPast && isScrollHalfImg) {
			thumbnail.querySelector('.thumbnail').classList.add('active');
		}
		else {
			thumbnail.querySelector('.thumbnail').classList.remove('active');
		}
	});
}