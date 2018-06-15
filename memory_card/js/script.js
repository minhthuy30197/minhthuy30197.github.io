var cards = [
'images/card1.jpg',
'images/card2.jpg',
'images/card3.jpg',
'images/card4.jpg',
'images/card5.jpg'
];

window.onload = function() {
	var imgArr = makeImgArray();
	shuffle(imgArr);
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
			'<div class="card" onclick="flipCard(this)">'+
			'<div class="front">'+
			'<img src="'+imgArr[i]+'" alt="card front" id="card'+i+'">'+
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
	if (!$(card).hasClass('flipped'))
		$(card).toggleClass('flipped');
}

