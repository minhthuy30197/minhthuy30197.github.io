window.addEventListener('keydown', function(e) {
	let audio = document.querySelector(`audio[data-sound="${e.keyCode}"]`);
	if (audio) {
		audio.currentTime = 0;
		audio.play();
		let key = document.querySelector(`.keyboard[data-sound="${e.keyCode}"]`);
		key.classList.add('pressed');
	}
});

let keyboards = document.querySelectorAll(`.keyboard`);
keyboards.forEach(keyboard => keyboard.addEventListener('transitionend', function(e) {
	if (e.propertyName == 'transform') {
		keyboard.classList.remove('pressed');
	}
}));

document.getElementById('bgcolor').addEventListener('change', handleChange);
document.getElementById('bgcolor').addEventListener('mousemove', handleChange);

function handleChange() {
	var unit = this.dataset.unit || '';
	document.documentElement.style.setProperty(`--${this.name}`,`${this.value}${unit}`);
}
