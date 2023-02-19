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
	particlesJS('stage__particles',
		{
			"particles": {
				"number": {
					"value": 10,
					"density": {
						"enable": false,
						"value_area": 800
					}
				},
				"color": {
					"value": "#ffffff"
				},
				"shape": {
					"type": "circle"
				},
				"opacity": {
					"value": 0.7,
					"random": false,
					"anim": {
						"enable": false,
						"speed": 1,
						"opacity_min": 0.1,
						"sync": false
					}
				},
				"size": {
					"value": 6,
					"random": true,
					"anim": {
						"enable": false,
						"speed": 40,
						"size_min": 0.1,
						"sync": false
					}
				},
				"line_linked": {
					"enable": true,
					"distance": 650,
					"color": "#ffffff",
					"opacity": 0.4,
					"width": 1
				},
				"move": {
					"enable": true,
					"speed": 2,
					"direction": "none",
					"random": false,
					"straight": false,
					"out_mode": "bounce",
					"attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 1200
					}
				}
			},
			"interactivity": {
				"detect_on": "canvas",
				"events": {
					"onhover": {
						"enable": false,
						"mode": "grab"
					},
					"onclick": {
						"enable": false,
						"mode": "push"
					},
					"resize": true
				},
				"modes": {
					"grab": {
						"distance": 400,
						"line_linked": {
							"opacity": 1
						}
					},
					"bubble": {
						"distance": 400,
						"size": 40,
						"duration": 2,
						"opacity": 8,
						"speed": 3
					},
					"repulse": {
						"distance": 200
					},
					"push": {
						"particles_nb": 4
					},
					"remove": {
						"particles_nb": 2
					}
				}
			},
			"retina_detect": true,
			"config_demo": {
				"hide_card": false,
				"background_color": "#b61924",
				"background_image": "",
				"background_position": "50% 50%",
				"background_repeat": "no-repeat",
				"background_size": "cover"
			}
		}
	);
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