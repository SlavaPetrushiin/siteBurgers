var dropdown__menu = document.querySelector(".dropdown__menu");
dropdown__menu.onclick = menuShow;//нажатие гамбургера

var close = document.querySelector(".close");
close.onclick = menuHide;//закрытие меню

function menuShow(){
	console.log(close);
	var header__menu = document.querySelector(".header__menu");
	header__menu.style.transform = 'translateX(0%)';
	
	close.style.display = 'block';
}

function menuHide(){
	document.querySelector('.header__menu').style.transform = 'translateX(-100%)';
	
	document.querySelector('.close').style.display = 'none';
}






