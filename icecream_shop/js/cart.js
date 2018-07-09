const endpoint = "https://cdn.rawgit.com/minhthuy30197/minhthuy30197.github.io/3342a96d/icecream_shop/json/icecreams.json";
var infos = [];
fetch(endpoint) 
.then(obj => obj.json())
.then(data => infos.push(...data));


$(function() { 
	products = document.querySelector('.products');
	var html = products.innerHTML;
	var cost_bill = 0;
	info_customer.cart.forEach(function(product) {
		infos.forEach(function(info) {
			if (info.id == product.id) {
				total = product.count * info.price;
				cost_bill += total;
				html += '<li class="product" data-id="' + product.id + '"> <div class="col info-product">' +
				'<div class="img-product"><img src="' + info.img + '" alt="' + info.name + '" class="img-responsive"></div>' +
				'<div class="info-detail">' + info.name + '</div></div>' +
				'<div class="col"><span class="price">' + info.price + '</span> VND </div>' + 
				'<div class="col"><input type="number" class="form-control" name="quantity" value="' + product.count + '" min="0" title="Quantity" onChange="changeCount(this)"></div>' +
				'<div class="col"><span class="total">' + total + '</span> VND</div>' +
				'<div class="remove"><button onclick="removeProduct(this)" class="btn btn-remove"><i class="fas fa-times"></i></button></div></li>';
			}
		});
	});
	products.innerHTML = html;
	document.getElementById('subtotal').innerHTML = cost_bill;
	document.getElementById('total').innerHTML = cost_bill;
});

function removeProduct(button) {
	var id = button.parentNode.parentNode.dataset.id;
	info_customer.cart.forEach(function(product, i) {
		if (product.id == id) {
			var delete_item = document.querySelector(`li[data-id="${id}"]`);
			delete_item.parentNode.removeChild(delete_item);
			info_customer.cart.splice(i, 1);
			DB.setData("info_customer", info_customer);
			document.querySelector('.count-item').innerHTML = info_customer.cart.length;
		}
	});
}

function changeCount(input) {
	var id = input.parentNode.parentNode.dataset.id;
	var total = Number(document.getElementById('total').innerHTML);
	var price = Number(input.parentNode.parentNode.querySelector('.price').innerHTML);
	info_customer.cart.forEach(function(product, i) {
		if (product.id == id) {
			total -= price * product.count;
			if (input.value != 0) {
				product.count = input.value;
				total += price * input.value;
				input.parentNode.parentNode.querySelector('.total').innerHTML = price * input.value;
			} else {
				info_customer.cart.splice(i, 1);
				var delete_item = document.querySelector(`li[data-id="${id}"]`);
				delete_item.parentNode.removeChild(delete_item);
			}
			document.getElementById('subtotal').innerHTML = total;
			document.getElementById('total').innerHTML = total;
			DB.setData("info_customer", info_customer);
			document.querySelector('.count-item').innerHTML = info_customer.cart.length;
		}
	});
}
