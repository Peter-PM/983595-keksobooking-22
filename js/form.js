import { resetMainMarker } from './map.js';
import { postData } from './api.js';
import { onPopupErrorShow, onPopupSuccessShow } from './popup.js';

const mainForm = document.querySelector('.ad-form');

const typeHousing = document.querySelector('#type');
const priceHousing = document.querySelector('#price');

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const housingPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

priceHousing.placeholder = housingPrice[typeHousing.value];

typeHousing.addEventListener('change', () => {
  let type = typeHousing.value;
  priceHousing.placeholder = housingPrice[type];
  priceHousing.min = housingPrice[type];
})

timeIn.addEventListener('change', () => {
  let type = timeIn.value;
  timeOut.value = type;
})

timeOut.addEventListener('change', () => {
  let type = timeOut.value;
  timeIn.value = type;
})

//Отправка данных
mainForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  postData(onPopupSuccessShow, onPopupErrorShow, new FormData(evt.target));

  mainForm.reset();
  resetMainMarker();
});

mainForm.querySelector('.ad-form__reset').addEventListener('click', (evt) => {
  evt.preventDefault();
  mainForm.reset();
  resetMainMarker();
});

export {mainForm};
