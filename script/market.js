//=================================Функционал корзины======================================
var cart ={};
function loadCart(){
  if(localStorage.getItem('cart')) {
	  cart = JSON.parse(localStorage.getItem('cart'));
		  showcart();
	  }
  else {
  	$('.cart').html('Корзина пуста');
  }
}
//показ купленого 
function showcart(){
	if (!isEmpty(cart)){
		$('.cart').html('Корзина пуста');
	}
	else {
		$.getJSON('tovars.json', function (data) {
			var goods = data;
			var out = '';
			for (var id in cart) {
				out += `<button data-id="${id}" class="delete">x</button>`;
				out += `<img src="images\${goods[id].img}">`;
				out += `${goods[id].name}`;
				out += `<button data-id="${id}" class="minusfl">-</button>`;
				out += `<span>Количество цветов</span>`;
				out += `${cart[id]}`;
				out += `<button data-id="${id}" class="plusfl">+</button>`;
				out += cart[id]*goods[id].cost;
				out += `<span>Количество букетов</span>`;
				out += `<input  onclick = ""type="button" value="-" id="button_minus">`;
				out += `<input class="str" type="number" step="1" min="1" max="10" id="num_count" name="quantity" value="1" title="Qty">`;
				out += `<input class="plus" type="button" value="+" onclick ="" id="button_plus">`;
				
			}
			$('.cart').html(out);
			$('.delete').on('click', deltovar);
			$('.plusfl').on('click', plusflowers);
			$('.minusfl').on('click', minusflowers);
		})
	}
}
//добавляем именно цветы
function plusflowers(){
	var id = $(this).attr('data-id');
	cart[id]++;
	savecart();
	showcart();
}
//убавляем именно цветы
function minusflowers(){
	var id = $(this).attr('data-id');
	if (cart[id]==1){
		delete cart[id];
	}
	else{
	cart[id]--;
	}
	savecart();
	showcart();
}
//цветы удаляем
function deltovar(){
	var id = $(this).attr('data-id');
	delete cart[id];
	savecart();
	showcart();
}
//сохраняем 
function savecart(){
	localStorage.setItem('cart',JSON.stringify(cart));
}
function isEmpty(object){
	//проверка корзины на пустоту
	for (var key in object)
		if (object.hasOwnProperty(key)) return true;
		return false;
}
//=====отправка на почту
function otpremail(){
	var ename = $('#ename').val();
	var email = $('#email').val();
	var phone = $('#phone').val();
	if (ename!= ''&&  email!=''&& phone!=''){
		if (isEmpty(cart)){
			$.post(
				"mail.php",
					{
						"ename": ename,
						"email": email,
						"phone": phone,
						"cart": cart
					},
			function(data){
				console.log(data);
			}
		);
	}
		else {
			alert('корзина пуста');
		}
	}
	else{
		alert('заполните поля');
	}

}
//загрузка при старте
$(document).ready(function () {
	loadCart();
	$('.otpr-email').on('click',otpremail);
})