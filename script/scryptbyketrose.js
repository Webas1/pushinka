//===============================Функционал корзины================================
let pzdc = {0:1,1:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,30:1};

$('.marketbut').on('click',add)
function add(){

  var id = $(this).attr('data-id');
  if (cart[id]==undefined){
    var val=parseInt($(this).attr('data-id'));
    var idl = pzdc[val];
    cart[id]= idl;
  }
  
  showminicart();
  savecart();
}
var cart={}; //корзина

function showminicart(){
  var out="";
  for(var key in cart){
      out+= key +'======'+ cart[key]
  }
  $('.mark1').html(out);
}

function savecart(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
function loadCart(){
  if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
    showminicart();
  }
}
$(document).ready(function(){
  loadCart();
})
//=========================================================================================





/*==================================Фильтр выкладывает что нужно====================*/

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
  var btnContainer = document.getElementById("filtrbut");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

/*=======================================================================*/


/*==================================Сортировка по цене  ====================*/


document.querySelector('button#btnsort').onclick = function () {
    sortList('data-price');
}
document.querySelector('button#btnsort').ondblclick = function () {
    sortListDesc('data-price');
}

function sortList(sortType) {
    let items = document.querySelector('.container1');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}

function sortListDesc(sortType) {
    let items = document.querySelector('.container1');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}


function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

/*=======================================================================*/



/*=======================================Плюс/Минус кнопочки=================*/

function buttonclick(){
   var str = document.getElementById('num_count');
   var mass = parseInt(str.value);
   mass = mass+1;
   str.value = mass;
   pzdc[1]=mass;
}
function buttonclickmin(){
   var str = document.getElementById('num_count');
   var mass = parseInt(str.value);
   mass = mass-1;
   str.value = mass;
   pzdc[1]=mass;
}
function buttonclick2(){
   var str = document.getElementById('str2');
   var mass = parseInt(str.value);
   mass = mass+1;
   str.value = mass;
   pzdc[2]=mass;
}
function buttonclickmin2(){
   var str = document.getElementById('str2');
   var mass = parseInt(str.value);
   mass = mass-1;
   str.value = mass;
   pzdc[2]=mass;
}
function buttonclick3(){
   var str = document.getElementById('str3');
   var mass = parseInt(str.value);
   mass = mass+1;
   str.value = mass;
   pzdc[3]=mass;
}
function buttonclickmin3(){
   var str = document.getElementById('str3');
   var mass = parseInt(str.value);
   mass = mass-1;
   str.value = mass;
   pzdc[3]=mass;
}
function buttonclick4(){
   var str = document.getElementById('str4');
   var mass = parseInt(str.value);
   mass = mass+1;
   str.value = mass;
   pzdc[4]=mass;
}
function buttonclickmin4(){
   var str = document.getElementById('str4');
   var mass = parseInt(str.value);
   mass = mass-1;
   str.value = mass;
   pzdc[4]=mass;
}
function buttonclick5(){
   var str = document.getElementById('str5');
   var mass = parseInt(str.value);
   mass = mass+1;
   str.value = mass;
   pzdc[5]=mass;
}
function buttonclickmin5(){
   var str = document.getElementById('str5');
   var mass = parseInt(str.value);
   mass = mass-1;
   str.value = mass;
   pzdc[5]=mass;
}
function buttonclick6(){
   var str = document.getElementById('str6');
   var mass = parseInt(str.value);
   mass = mass+1;
   str.value = mass;
   pzdc[6]=mass;
}
function buttonclickmin6(){
   var str = document.getElementById('str6');
   var mass = parseInt(str.value);
   mass = mass-1;
   str.value = mass;
   pzdc[6]=mass;
}
function buttonclick7(){
   var str = document.getElementById('str7');
   var mass = parseInt(str.value);
   mass = mass+1;
   str.value = mass;
}
function buttonclickmin7(){
   var str = document.getElementById('str7');
   var mass = parseInt(str.value);
   mass = mass-1;
   str.value = mass;
}
function buttonclick8(){
   var str = document.getElementById('str8');
   var mass = parseInt(str.value);
   mass = mass+1;
   str.value = mass;
}
function buttonclickmin8(){
   var str = document.getElementById('str8');
   var mass = parseInt(str.value);
   mass = mass-1;
   str.value = mass;
}
function buttonclick9(){
   var str = document.getElementById('str9');
   var mass = parseInt(str.value);
   mass = mass+1;
   str.value = mass;
}
function buttonclickmin9(){
   var str = document.getElementById('str9');
   var mass = parseInt(str.value);
   mass = mass-1;
   str.value = mass;
}
function buttonclick10(){
   var str = document.getElementById('str10');
   var mass = parseInt(str.value);
   mass = mass+1;
   str.value = mass;
}
function buttonclickmin10(){
   var str = document.getElementById('str10');
   var mass = parseInt(str.value);
   mass = mass-1;
   str.value = mass;
}
function buttonclick11(){
   var str = document.getElementById('str11');
   var mass = parseInt(str.value);
   mass = mass+1;
   str.value = mass;
}
function buttonclickmin11(){
   var str = document.getElementById('str11');
   var mass = parseInt(str.value);
   mass = mass-1;
   str.value = mass;
}
function buttonclick12(){
   var str = document.getElementById('str12');
   var mass = parseInt(str.value);
   mass = mass+1;
   str.value = mass;
}
function buttonclickmin12(){
   var str = document.getElementById('str12');
   var mass = parseInt(str.value);
   mass = mass-1;
   str.value = mass;
}