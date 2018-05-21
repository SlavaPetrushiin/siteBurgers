//*******БУРГЕР МЕНЮ
let gamburgerMenu = (function(){
	
	let dropdown__menu = document.querySelector(".dropdown__menu");
	let close = document.querySelector(".close");
	let header__menu = document.querySelector(".header__menu");

	dropdown__menu.addEventListener('click', menuShow) ;//нажатие гамбургера
	close.addEventListener('click', menuHide);//закрытие меню

	header__menu.addEventListener('click', function(e){
		let target = e.target;
		if(target.className === "menu__link"){
			menuHide();
		}	
	})
	function menuShow(){
		document.body.classList.add('body__active-menu');
		document.querySelector('.header').classList.add('header__menu-active');
	}

	function menuHide(){
		document.body.classList.remove('body__active-menu');
		document.querySelector('.header').classList.remove('header__menu-active');
	}
	return {
		open: 'dropdown__menu',
		close: 'close'
	}
}());



//*******СОСТАВ БУРГЕРОВ (slider)

let ingridients = (function(){
	
	var burger__dropdown = document.querySelector('.burger__link-image');
	var burger__close = document.querySelector('.burger__dropdown-close');
	
	burger__dropdown.addEventListener('click', burgerShow);
	burger__close.addEventListener('click', burgerHide);
	
	
	function burgerShow(){
		burger__dropdown.classList.add('burger__dropdown-active');
	}
	function burgerHide(){
		console.log(burger__dropdown);
		burger__dropdown.classList.remove('burger__dropdown-active');
	}///ПОЧЕМУ НЕ УДАЛЯЕТ КЛАССССССССС??????????????????
}());








//**************************КАРТА***********************************
ymaps.ready(init);

var placemarks = [
	{
		latitude:55.51369140,
		longitude:36.98030476,
		hintContent:'<div class="map__hint">Улица Клубная, дом 32</div>',
		balloonContent:[
			'<div class="map__balloon">',
			'<img class="map__img" src="images/logo.svg alt="Бургеры">',
			'Сaмые вкусные бургеры у нас',
			'</div>'
		]
	},
	{
		latitude:55.55126619,
		longitude:37.07830025,
		hintContent:'<div class="map__hint">Улица Комсомольская, дом 5</div>',
		balloonContent:[
			'<div class="map__balloon">',
			'<img class="map__img" src="images/logo.svg alt="Бургеры">',
			'Сaмые вкусные бургеры у нас',
			'</div>'
		]		
	},
	{
		latitude:55.55502368,
		longitude:36.97230567,
		hintContent:'<div class="map__hint">Калининец, дом 22</div>', 
		balloonContent:[
			'<div class="map__balloon">',
			'<img class="map__img" src="images/logo.svg alt="Бургеры">',
			'Сaмые вкусные бургеры у нас',
			'</div>'
		]		
	}
];

var myMap;
var geoObjects = [];
function init(){
	myMap = new ymaps.Map("map", {
		center:[55.51, 36.98],
		zoom: 12,
		controls:['zoomControl'],//элементы управления
		behaviors:['drag'],//зум карты
	});
	
	for (var i=0; i<placemarks.length; i++){
		geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],{
		hintContent:placemarks[i].hintContent, 
		balloonContent:placemarks[i].balloonContent.join('')
	},
	{
		iconLayout:'default#image',
		iconImageHref:'images/map-marker.png',
		iconImageSize:[46, 57],
		iconImageOffset:[-23,-57]			
	});
		
	};
	
	var cluster = new ymaps.Clusterer({
		
	});
	
	myMap.geoObjects.add(cluster);
	//myMap.geoObjects.add(placeSelyatino);
	cluster.add(geoObjects);
}
					   





