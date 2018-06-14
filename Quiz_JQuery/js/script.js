var count_theme = 0;
var localStorage = window.localStorage;
var quizz = [
{
	question: "What ___ you doing? I am ___ at Techmaster.",
	choiceA: "are ... learning",
	choiceB: "is ... learning",
	choiceC: "am ... learn",
	choiceD: "do ... learned",
	answer: "A"
},
{
	question: "He ___ me when we were playing football.",
	choiceA: "is calling",
	choiceB: "was calling",
	choiceC: "called",
	choiceD: "calls",
	answer: "C"
},
{
	question: "I ___ Hoa since 2010",
	choiceA: "don\'t meet",
	choiceB: "met",
	choiceC: "haven\'t met",
	choiceD: "meet",
	answer: "C"
},
{
	question: "I am ___ at the present.",
	choiceA: "cook",
	choiceB: "cooked",
	choiceC: "cooks",
	choiceD: "cooking",
	answer: "D"
},
{
	question: "Tom ___ at 6 am everyday.",
	choiceA: "gets at",
	choiceB: "gets up",
	choiceC: "gets down",
	choiceD: "gets on",
	answer: "B"
}
];

var themes = [
'images/bg4.jpg',
'images/bg3.jpg',
'images/bg2.jpg',
'images/bg1.jpg'
];


function start() {
	var answer = {};
	window.location.href = "quiz.html";
}

function change_theme() {
	count_theme++;
	count_theme = count_theme%4;
	$('body').css('background-image', 'url('+themes[count_theme]+')');
	localStorage.setItem('theme_pos', count_theme);
}

window.onload =  function() {
	var count_theme = localStorage.getItem('theme_pos');
	console.log(count_theme);
	if (count_theme == null) count_theme = 0;
	$('body').css('background-image', 'url('+themes[count_theme]+')');
}