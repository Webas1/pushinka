$('.againmenu').on('click', function(){
	$('#menu_all').toggleClass('active');
});
$(function() {$(window).scroll(function() {if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();} else {$('#toTop').fadeOut();}});$('#toTop').click(function() 
			{$('body,html').animate({scrollTop:0},800);});});
	
$(document).ready(function () {
    	$("a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 300); //1100 - скорость прокрутки
        } else {
            $('html').animate({ scrollTop: destination }, 1100);
        }
        return false; 
    });});

filterSelection("all")
    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("flowers");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
            }
    }

    function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
        }
    }

    function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);     
            }   
        }
    element.className = arr1.join(" ");
    }

// Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("filtrbuttom");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
    }

    var numCount = document.getElementById('num_count');
    var plusBtn = document.getElementById('button_plus');
    var minusBtn = document.getElementById('button_minus');
    plusBtn.onclick = function() {
    var qty = parseInt(numCount.value);
    qty = qty + 1;
    numCount.value = qty;
    }
    minusBtn.onclick = function() {
    var qty = parseInt(numCount.value);
    qty = qty - 1;
    numCount.value = qty;
    }
  