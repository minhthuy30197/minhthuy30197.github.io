var cards = [
'images/card1.jpg',
'images/card2.jpg',
'images/card3.jpg',
'images/card4.jpg',
'images/card5.jpg'
];

var current = null;

window.onload = function() {
	var imgArr = makeImgArray();
	shuffle(imgArr);
	console.log(imgArr);
	drawImg(imgArr);
}

function makeImgArray() {
	var imgArr = [];
	for (var i=0; i<cards.length; i++) {
		imgArr.push(cards[i]);
		imgArr.push(cards[i]);
	}
	return imgArr;
}

function drawImg(imgArr) {
	for (var i=0; i<imgArr.length; i++) {
		$('.wrapper').append('<div class="thumb">'+
			'<div class="card" onclick="flipCard(this)" data-name="'+imgArr[i]+'">'+
			'<div class="front">'+
			'<img src="'+imgArr[i]+'" alt="card front">'+
			'</div>'+
			'<div class="back">'+
			'<img src="images/back.jpg" alt="card back">'+
			'</div>'+
			'</div>'+
			'</div>');
	}
	$('.wrapper').append('<div class="clear"></div>');
}


function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

function flipCard(card) {
	if (!$(card).hasClass('flipped')) {
		$(card).toggleClass('flipped');
		if (current == null) {
			current = $(card);
		} else {
			if ($(card).attr("data-name") == $(current).attr("data-name")) {
				$(current).find('.front').css('box-shadow','0 0 10px 5px green');
				$(card).find('.front').css('box-shadow', '0 0 10px 5px green');
				setTimeout(function() {
					document.getElementById('success-music').play();
					$(current).css('opacity', '0');
					$(card).css('opacity', '0');
					current = null;
				}, 1000);
			}
			else {
				$(current).find('.front').css('box-shadow','0 0 10px 5px red');
				$(card).find('.front').css('box-shadow', '0 0 10px 5px red');
				setTimeout(function() {
					document.getElementById('failed-music').play();
					$(current).toggleClass('flipped');
					$(card).toggleClass('flipped');
					$(current).find('.front').css('box-shadow','0 0 10px 5px white');
					$(card).find('.front').css('box-shadow', '0 0 10px 5px white');
					current = null;
				}, 1000);
			} 
		} 
	}
}

