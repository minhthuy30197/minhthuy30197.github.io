var cur_question = 0; 
var your_choice = [];
var cur_choice = "";

window.onload =  function() {
	var count_theme = localStorage.getItem('theme_pos');
	if (count_theme == null) count_theme = 0;
	$('body').css('background-image', 'url('+themes[count_theme]+')');
	$('#retry').css('display', 'none');
	cur_question = 0; 
	display_content();
}

function display_content() {
	if (cur_question >= 0 && cur_question < quizz.length) {
		cur_choice = "";
		$("#content_question").text(quizz[cur_question].question);
		$("#choiceA").text(quizz[cur_question].choiceA);
		$("#choiceB").text(quizz[cur_question].choiceB);
		$("#choiceC").text(quizz[cur_question].choiceC);
		$("#choiceD").text(quizz[cur_question].choiceD);
		$(".btn").css('background','linear-gradient(to bottom, #3366ff 0%, #ffffff 100%)');
	}
}

function next() {
	your_choice.push(cur_choice);
	console.log(your_choice);
	cur_question++;
	if (cur_question >= quizz.length) calculateScore();
	else {
		display_content();
	}
}

function choice(button) {
	$(".btn").css('background','linear-gradient(to bottom, #3366ff 0%, #ffffff 100%)');
	button.style.background = "linear-gradient(to bottom, rgba(255,0,0,0), green)";
	cur_choice = button.value;
}

function calculateScore() {
	var score = 0;
	for (var i=0; i<quizz.length; i++) {
		if (quizz[i].answer == your_choice[i]) score++;
	}
	console.log(score);
	if (score == quizz.length) window.location.href = "result.html";
	else {
		$('#retry').css('display','block');
		$('#content').css('display','none');
		$('#info').html(score+"/"+quizz.length + "<br>OOP! Better luck next time. Try your best.");
	}
}

function retry() {
	window.location.href = "quiz.html";
}

