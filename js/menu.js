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
	
	burger__dropdown.addEventListener('mouseenter', burgerShow);
	burger__dropdown.addEventListener('mouseleave', burgerHide);
	burger__close.addEventListener('click', burgerHide);
	
	
	function burgerShow(){
		burger__dropdown.classList.add('burger__dropdown-active');
	}
	function burgerHide(){
		console.log(burger__dropdown);
		burger__dropdown.classList.remove('burger__dropdown-active');
	}///ПОЧЕМУ НЕ УДАЛЯЕТ КЛАССССССССС??????????????????
}());


//********КОМАНДА**************

let team = (function(){
	let teamList = document.querySelector('.workers__unit');
	teamList.addEventListener('click', function(e){
		e.preventDefault();

		let target = e.target;
		//console.log(target);
		let unit = target.closest('.unit');//поиск ближайщего родителя
		let units = document.querySelectorAll('.unit');

		if (!unit.classList.contains('unit__active')) {
			for (let i = 0; i<units.length; i++ ){
				units[i].classList.remove('unit__active');
			}
			unit.classList.add('unit__active');
		} else {
			unit.classList.remove('unit__active');
		}
	});	
}());


//*******ВЕРТИКАЛЬНОЕ МЕНЮ

var verticallyMenu = document.querySelector('.nav');
verticallyMenu.addEventListener('click', function(e){
	e.preventDefault();
	
	let target = e.target;
	console.log(target);
	let nav__menu = target.closest('.nav__menu');
	console.log(nav__menu);
	let navs = document.querySelectorAll('.nav__menu');
	
		if (!nav__menu.classList.contains('nav__menu-active')){
			for (var i=0; i<navs.length; i++){
				navs[i].classList.remove('nav__menu-active');
			}
			nav__menu.classList.add('nav__menu-active');
		} else {
			nav__menu.classList.remove('nav__menu-active');
		}
});

//let calculateWidth = () =>{  
	//let windowWidth = $(window).width();
	//let links = $(".nav__menu");
	//let linksWidth = links.width();
	
	//let reqWidth = windowWidth - linksWidth * links.length;
	
	//return reqWidth > 550 ? 550 : reqWidth;
//}
//console.log(reqWidth);



//*******************************ОБРАБОТКА ФОРМЫ!!!!!!!!!!!!!!!!!!!


//$('#order-form').on('submit', submitForm);
	//function submitForm(e){
		//e.preventDefault();
		
		//var form = $(e.target),
		//	var request = submitForm;
		
		//request.fail(function(jqXHR, textStatus){
		//	alert("Request failed: " + textStatus);
		//});
	//};

//Уневерсальная функция 
	//function submitForm(form){
	//	var data = form.serialize();
	//		url = form.attr('action');
	//	
	//	return $.ajax({
	//		type: 'POST',
	//		url: url,
	//		data: data,
	//		dataType: 'JSON'
	//	});
	//};

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
	

//КАРУСЕЛЬ
//$(document).ready(function(){
  //$(".slader__list").owlCarousel({
   //  items: 1,
	// center:true,
    // autoplay: true,
    // autoplayHoverPause: true,
   //  loop: true,
	// navigation: true,
   //  navText: ['prev', 'next']
    
  //});
//});




//***********************СКРОЛ  СКРОЛ
const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;
const  mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile =  mobileDetect.mobile();

setActiveMenuItem = itemEq =>{
	$(".site__item")
		.eq(itemEq)
		.addClass("active")
		.siblings()
		.removeClass("active");
}

const preformTransition = sectionEq =>{
	const position = `${-sectionEq*100}%`;
	
	if(inScroll===false){
		
		inScroll = true;
		
		sections
			.eq(sectionEq)
			.addClass('section-active')
			.siblings()
			.removeClass('section-active');

		display.css({
			transform: `translateY(${position})`,
			'-webkit-transform':`translateY(${position})`
		});		
	}
	
	const transitionDuraction = parseInt(display.css('transition-duraction')) * 1000; //время в мс
	
	setTimeout(() => {
		inScroll = false;
		setActiveMenuItem(sectionEq);
	}, transitionDuraction + 300);// за 300 мс проходит код

};

const scrollToSection = direction =>{
	const activeSection = sections.filter('.section-active');
	const nextSection =  activeSection.next();
	const prexSection = activeSection.prev();
	
	if(direction === "up" && prexSection.length){
		preformTransition(prexSection.index());
	}
	if (direction === "down" && nextSection.length){
		preformTransition(nextSection.index());
	}
}

$(document).on({
	wheel:  e => {
		const deltaY  = e.originalEvent.deltaY;
		const direction = deltaY > 0 ? 'down' : 'up';

		scrollToSection(direction);
		
	},
	keydown: e =>{

		switch(e.keyCode){
			case 40:
				scrollToSection("down");
				break;
			case 38:
				scrollToSection("up");
				break;	
		};
	},
	touchmove: e => e.preventDefault()
});

$('[data-scroll-to]').on("click", e => {
	e.preventDefault();
	
	const target = parseInt($(e.currentTarget).attr('data-scroll-to'));
	
	preformTransition(target);
	console.log(target);
})

if (isMobile){
	$(document).swipe({
		//Generic swipe handler for all directions
		swipe:function(
			event, 
			direction, 
			distance, 
			duration, 
			fingerCount,
			fingerData
		) {
			const swipeDirection = direction === 'down' ? 'up' : 'down';

			scrollToSection(swipeDirection);	
		}
	});	
}











