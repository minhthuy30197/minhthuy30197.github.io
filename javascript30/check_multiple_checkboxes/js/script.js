let inputs = document.querySelectorAll('input[type="checkbox"]');
let lastChecked;

function handleChecked(e) {
	let isBetween = false;
	if (this.checked) {
		this.parentElement.parentElement.querySelector('.right').classList.add('remove');
	}
	else {
		this.parentElement.parentElement.querySelector('.right').classList.remove('remove');
	}
	if (this.checked && e.shiftKey) {
		inputs.forEach(input => {
			if (input === lastChecked || input === this) {
				isBetween = !isBetween;
			}
			if (isBetween) {
				input.checked = true;
				input.parentElement.parentElement.querySelector('.right').classList.add('remove');
			}
		});
	}
	lastChecked = this;
}

inputs.forEach(input => input.addEventListener('click', handleChecked));


