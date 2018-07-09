window.addEventListener('keydown', function(e) {
	let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if (audio) {
		audio.currentTime = 0;
		audio.play();
		let thumb = document.querySelector(`.thumb[data-key="${e.keyCode}"]`);
		thumb.classList.add('playing');
	}
});

let keys = document.querySelectorAll('.thumb');
keys.forEach(key => key.addEventListener("transitionend", function(e) {
	if (e.propertyName == 'transform') {
		key.classList.remove('playing');
	}
})
);