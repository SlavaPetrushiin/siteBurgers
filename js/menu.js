var dropdown__menu = document.querySelector(".dropdown__menu");
var close = document.querySelector(".close");
var btn = document.querySelector(".header__btn");
var header__menu = document.querySelector(".header__menu");

dropdown__menu.addEventListener('click', menuShow) ;//нажатие гамбургера
close.onclick = menuHide;//закрытие меню
header__menu.addEventListener('click', function(e){
	let target = e.target;
	if(target.className === "menu__link"){
		menuHide();
	}	
})
function menuShow(){
	
	header__menu.style.transform = 'translateX(0%)';
	
	close.style.display = 'block';
	dropdown__menu.style.display = 'none';
	btn.style.display = 'none';
}

function menuHide(){
	header__menu.style.transform = 'translateX(-100%)';
	close.style.display = 'none';
	btn.style.display = 'block';
	document.querySelector('.dropdown__menu').style.display = 'block';
}






