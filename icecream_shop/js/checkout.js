$(function() { 
	document.getElementById('subtotal').innerHTML = info_customer.subtotal;
	document.getElementById('total').innerHTML = info_customer.total;
	var order = document.querySelector('.part-order1 .left'); 
	var cost = document.querySelector('.part-order1 .right'); 
	var leftHtml = '';
	var rightHtml = '';
	info_customer.cart.forEach(function(product) {
		leftHtml += '<p>' + product.name + ' x ' + product.count + '</p>';
		rightHtml += '<p>' +product.total+ '</p>';
	});
	order.innerHTML = leftHtml;
	cost.innerHTML = rightHtml;
});