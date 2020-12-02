"use strict"
const popupLinks = document.querySelectorAll(".popup-link"); //  В эту переменную приходят все объекты с классом popup-link
const body = document.querySelector("body"); // Лежит боди чтобы блокировать скролл
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock= true; // Предовращает двойные нажатия 

const timeout = 800; // цифра из свойств transition для скорлла


// Проверка есть ли такие ссылки на html стрванице
if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		// получаем ссылки и присваимае в перевеменую popupLink
		const popupLink = popupLinks[index];
		// Вешаем на переменную событие Запускаем событие, удаляем #,  
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute("href").replace("#", "");// Удаляет #
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);// Вызов функции которая открывает окно
			e.preventDefault(); // Запрещает перезагружать страницу
		});
	}
}
const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		// Функция которая будет закрывать модальное окно
		el.addEventLister("click", function (e) {
			popupClose(el.closest(".popup"));
			e.preventDefault();
		})
	}
}
//Функция которая открывает окон
function popupOpen(curentPopup) {
	if (curentPopup && unclock) {
		const popupActive = document.querySelector(".popup.open");
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add("open");
		curentPopup.addEventLister("click", function(e) {
			if (!e.target.closest(".popup_content")) {
				popupClose(e.target.closest(".popup"));
			}
		});
	}
}
// Функия которая закрывает модальное окно 
function popupClose(popupActive, doUnlock = true) {
	if (unclok){
		popupActive.classList.remove("open");
		if (doUnlock) {
			bodyUnclock();
		}
	}
}