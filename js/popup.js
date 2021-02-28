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

successMessage.addEventListener('click', () => {
  main.removeChild(successMessage);
  document.removeEventListener('keydown', onEscPopupSuccess);
});


errorMessage.addEventListener('click', () => {
  main.removeChild(errorMessage);
  document.removeEventListener('keydown', onEscPopupError);
});

const onEscPopupSuccess = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    main.removeChild(successMessage);
    document.removeEventListener('keydown', onEscPopupSuccess);
  }
}

const onEscPopupError = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    main.removeChild(errorMessage);
    document.removeEventListener('keydown', onEscPopupError);
  }
}

const popupShow = (resp) => {
  if (resp.ok) {
    main.appendChild(successMessage);
    document.addEventListener('keydown', onEscPopupSuccess);
    mainForm.reset();

    resetMainMarker();
  } else {
    main.appendChild(errorMessage);

    document.addEventListener('keydown', onEscPopupError)
  }
};

export {popupShow};
