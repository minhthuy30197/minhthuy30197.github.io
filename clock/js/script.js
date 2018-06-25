setInterval(setTimeParent , 1000);
setInterval(setTimeUsa, 1000);
setInterval(setTimeEng, 1000);
setInterval(setTimeIta, 1000);

let seconds_p_wise = document.querySelector('.clock-parent .seconds-parent');
let minutes_p_wise = document.querySelector('.clock-parent .minutes-parent');
let hours_p_wise = document.querySelector('.clock-parent .hours-parent');
let hours_1_wise = document.querySelector('.child1 .hours-child1');
let minutes_1_wise = document.querySelector('.child1 .minutes-child1');
let hours_2_wise = document.querySelector('.child2 .hours-child2');
let minutes_2_wise = document.querySelector('.child2 .minutes-child2');
let hours_3_wise = document.querySelector('.child3 .hours-child3');
let minutes_3_wise = document.querySelector('.child3 .minutes-child3');

function setTimeUsa() {
	let now = new Date();
	let minutes = now.getMinutes();
	let hours = now.getHours() + 1 - 12;
	let minutes_degree = (minutes/60)*360 - 90;
	let hours_degree = (hours/12)*360 - 90;
	minutes_1_wise.style.transform = `rotate(${minutes_degree}deg)`;
	hours_1_wise.style.transform = `rotate(${hours_degree}deg)`;
}

function setTimeEng() {
	let now = new Date();
	let minutes = now.getMinutes();
	let hours = now.getHours() + 1 - 7;
	let minutes_degree = (minutes/60)*360 - 90;
	let hours_degree = (hours/12)*360 - 90;
	minutes_2_wise.style.transform = `rotate(${minutes_degree}deg)`;
	hours_2_wise.style.transform = `rotate(${hours_degree}deg)`;
}

function setTimeIta() {
	let now = new Date();
	let minutes = now.getMinutes();
	let hours = now.getHours() + 1 - 6;
	let minutes_degree = (minutes/60)*360 - 90;
	let hours_degree = (hours/12)*360 - 90;
	minutes_3_wise.style.transform = `rotate(${minutes_degree}deg)`;
	hours_3_wise.style.transform = `rotate(${hours_degree}deg)`;
}

function setTimeParent() {
	let now = new Date();
	let seconds = now.getSeconds();
	let minutes = now.getMinutes();
	let hours = now.getHours() + 1;
	let seconds_degree = (seconds/60)*360 - 90; 
	let minutes_degree = (minutes/60)*360 - 90;
	let hours_degree = (hours/12)*360 - 90;
	seconds_p_wise.style.transform = `rotate(${seconds_degree}deg)`;
	minutes_p_wise.style.transform = `rotate(${minutes_degree}deg)`;
	hours_p_wise.style.transform = `rotate(${hours_degree}deg)`;
}
