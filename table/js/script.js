var products = [
	{
		id: "M1",
		name: "Áo dạ 1",
		image: "images/da6.jpg",
		cost: "1900000",
		count: 10,
		made: "Việt Nam"
	},
	{
		id: "M2",
		name: "Áo dạ 2",
		image: "images/da7.jpg",
		cost: "950000",
		count: 13,
		made: "Việt Nam"
	},
	{
		id: "M3",
		name: "Áo dạ 3",
		image: "images/da8.jpg",
		cost: "693000",
		count: 5,
		made: "Hàn Quốc"
	},
	{
		id: "M4",
		name: "Áo dạ 4",
		image: "images/da9.jpg",
		cost: "999000",
		count: 5,
		made: "Trung Quốc"
	},
	{
		id: "M5",
		name: "Áo dạ 5",
		image: "images/da10.jpg",
		cost: "1200000",
		count: 2,
		made: "Hàn Quốc"
	}
]

window.onload = function() {
	for (var i=0; i<products.length; i++) {
		$('#table').append('<tr>'+
			'<td>'+products[i].id+'</td>'+
			'<td>'+products[i].name+'</td>'+
			'<td width="30%"><div class="div_img"><img src="'+products[i].image+'" alt="Áo dạ '+(i+1)+'"></div></td>'+
			'<td>'+products[i].cost+'</td>'+
			'<td>'+products[i].count+'</td>'+
			'<td>'+products[i].made+'</td>'+
		'</tr>');
	}
	$("#table").tablesorter(); 
}

function sort(th) {
	$('#table th').addClass('thead_both');
	$('#table th').not(th).removeClass('thead_desc');
	$('#table th').not(th).removeClass('thead_asc');
	$(th).removeClass('thead_both');
	if ($(th).hasClass('thead_asc')) {
		$(th).addClass('thead_desc');
		$(th).removeClass('thead_asc');
	}
	else {
		$(th).addClass('thead_asc');
		$(th).removeClass('thead_desc');
	}
}
