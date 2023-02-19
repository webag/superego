/* fancybox BEGIN */
Fancybox.defaults.placeFocusBack = false;
Fancybox.defaults.autoFocus = false;
Fancybox.defaults.trapFocus = false;
Fancybox.defaults.Toolbar = {
	display: ["close", "counter"]
};
Fancybox.defaults.l10n = {
	CLOSE: "Закрыть",
	NEXT: "Дальше",
	PREV: "Назад",
	MODAL: "Вы можете закрыть данное окно, нажав клавишу ESC",
	ERROR: "Что-то пошло не так. Пожалуйста, повторите попытку позже",
	IMAGE_ERROR: "Изображение не найдено",
	ELEMENT_NOT_FOUND: "HTML элемент не найден",
	AJAX_NOT_FOUND: "Ошибка загрузки AJAX : Не найдено",
	AJAX_FORBIDDEN: "Ошибка загрузки AJAX : Запрещено",
	IFRAME_ERROR: "Ошибка загрузки страницы",
	TOGGLE_ZOOM: "Переключить уровень масштаба",
	TOGGLE_THUMBS: "Переключить эскиз",
	TOGGLE_SLIDESHOW: "Переключить презентацию",
	TOGGLE_FULLSCREEN: "Переключить режим полного экрана",
	DOWNLOAD: "Скачать",
};

function initFancy() {
	Fancybox.bind(".fancy", {
		closeButton: 'inside'
	});

	Fancybox.bind(".fancy-modal", {
		dragToClose: false
	});

	Fancybox.bind(".fancy-video", {
		dragToClose: false,
	});

	Fancybox.bind(".fancy-map", {
		dragToClose: false,
		type: 'iframe'
	});
}

document.addEventListener("DOMContentLoaded", function () {
	initFancy();
});
/* fancybox END */


/* Particles Begin */
document.addEventListener("DOMContentLoaded", function () {
	particlesJS.load('stage__particles', '/js/particles.json');
})
/* Particles End */


/* Parallax Begin */
const initParallax = () => {
	const body = document.querySelector('body');
	const stage = document.querySelector('.stage');
	const pageW = window.innerWidth;
	const pageH = window.innerHeight;
	const timesPerSecond = 60;
	let wait = false;
	
	// const blink = area.querySelector('.blink');
	let moveX;
	let moveY;
	body.addEventListener('mousemove', e => {
		moveX = (e.pageX - pageW / 2) / 30;
		moveY = (e.pageY - pageH / 2) / 30;
		if (!wait) {
			stage.style.setProperty('--mouse-x', `${moveX}px`);
			stage.style.setProperty('--mouse-y', `${moveY}px`);
			wait = true;
			setTimeout(function () {
				wait = false;
			}, 1000 / timesPerSecond);
		}
	})
}

document.addEventListener("DOMContentLoaded", function () {
	initParallax();
})
/* Parallax End */