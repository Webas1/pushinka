// var box ={1:1,2:2,3:3,4:4};
let box = {1,2,3,4};
function loadbox() {
	$.getJSON('boxtovars.json',function (data) {
		var goods = data;
		var out = '';
		for (var id in box) {
			out += '<div class="boxtovar">';
			// out += `<div class="vew"><img class="avka" name='avaaa' src="${goods[id].img}"></div>`;
			out += `<div class ="vew"><span class="name"> ${goods[id].name} </span></div>`;
			out += `<div class ="vew"><span class="sale"> ${goods[id].cost}</span></div>`;
			out += '</div>';
		}
		$('.viborbox').html(out);
	})
	// body...
}
$(document).ready(function () {
loadbox();
})
