import { resetMainMarker } from './map.js';
import { mainForm } from './form.js';
import { isEscEvent } from './util.js';


//Отправка данных
const main = document.querySelector('main');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');


//const errorButton = errorMessage.querySelector('button');
// errorButton.addEventListener('click', () => {
//   main.removeChild(errorMessage);
// });

const removeChildListener = (message, escFoo) => {
  main.removeChild(message);
  document.removeEventListener('keydown', escFoo);
}

//Обработка ошибки
const onEscPopupError = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    removeChildListener(errorMessage, onEscPopupError);
  }
}
//Удаление кликера
const delClickerError = () => {
  removeChildListener(errorMessage, onEscPopupError);
  errorMessage.removeEventListener('click', delClickerError);
}

//Создание попапа ошибки формы
const showPopupError = () => {
  document.addEventListener('keydown', onEscPopupError);
  errorMessage.querySelector('.error__message').textContent = 'Ошибка размещения объявления';
  main.appendChild(errorMessage);

  errorMessage.addEventListener('click', delClickerError);
}

//Обработка успешной отправки формы
const onEscPopupSuccess = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    removeChildListener(successMessage, onEscPopupSuccess);
  }
}
//Удаление кликера
const delClickerSuccess = () => {
  removeChildListener(successMessage, onEscPopupSuccess);
  successMessage.removeEventListener('click', delClickerSuccess);
}

//Создание попапа успешной отправки формы
const showPopupSuccess = () => {

  main.appendChild(successMessage);
  document.addEventListener('keydown', onEscPopupSuccess);

  successMessage.addEventListener('click', delClickerSuccess);

  mainForm.reset();

  resetMainMarker();
}

//Ошибка загрузки карты
const showMapError = () => {
  showPopupError();
  errorMessage.querySelector('.error__message').textContent = 'Карта не загрузилась';
}

export {showPopupError, showPopupSuccess, showMapError};
