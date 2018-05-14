var dropdown__menu = document.querySelector(".dropdown__menu");
var close = document.querySelector(".close");
var btn = document.querySelector(".header__btn");

dropdown__menu.onclick = menuShow;//нажатие гамбургера
close.onclick = menuHide;//закрытие меню

function menuShow(){
	var header__menu = document.querySelector(".header__menu");
	header__menu.style.transform = 'translateX(0%)';
	
	close.style.display = 'block';
	dropdown__menu.style.display = 'none';
	btn.style.display = 'none';
}

function menuHide(){
	document.querySelector('.header__menu').style.transform = 'translateX(-100%)';
	document.querySelector('.close').style.display = 'none';
	document.querySelector('.header__btn').style.display = 'block';
	document.querySelector('.dropdown__menu').style.display = 'block';
}






