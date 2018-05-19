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
					   





