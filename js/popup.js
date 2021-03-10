// import { resetMainMarker } from './map.js';
// import { mainForm } from './form.js';
import { isEscEvent } from './util.js';


//Отправка данных
const main = document.querySelector('main');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

//const errorButton = errorMessage.querySelector('button');
// errorButton.addEventListener('click', () => {
//   main.removeChild(errorMessage);
// });

const closePopup = (message, escFoo) => {
  message.remove();
  document.removeEventListener('keydown', escFoo);
}

//Создание попапа ошибки формы
const onPopupErrorShow = () => {
  document.addEventListener('keydown', onPopupErrorEsc);
  errorMessage.querySelector('.error__message').textContent = 'Ошибка размещения объявления';
  errorMessage.addEventListener('click', onPopupErrorClick);
  main.appendChild(errorMessage);
}
//Обработка ESC на попапе ошибки
const onPopupErrorEsc = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup(errorMessage, onPopupErrorEsc);
  }
}
//Удаление кликера
const onPopupErrorClick = () => {
  closePopup(errorMessage, onPopupErrorEsc);
  errorMessage.removeEventListener('click', onPopupErrorClick);
}

//Создание попапа успешной отправки формы
const onPopupSuccessShow = () => {
  document.addEventListener('keydown', onPopupSuccessEsc);
  successMessage.addEventListener('click', onPopupSuccessClick);
  main.appendChild(successMessage);
  // mainForm.reset();
  // resetMainMarker();
}
//Обработка ESC на попапе успешной отправки формы
const onPopupSuccessEsc = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup(successMessage, onPopupSuccessEsc);
  }
}
//Удаление кликера
const onPopupSuccessClick = () => {
  closePopup(successMessage, onPopupSuccessEsc);
  successMessage.removeEventListener('click', onPopupSuccessClick);
}

//Ошибка загрузки карты
const showMapErrorPopup = () => {
  onPopupErrorShow();
  errorMessage.querySelector('.error__message').textContent = 'Объявления не загрузились';
}

export {onPopupErrorShow, onPopupSuccessShow, showMapErrorPopup};
