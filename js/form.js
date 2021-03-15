import { resetMainMarker } from './map.js';
import { postData } from './api.js';
import { onPopupErrorShow, onPopupSuccessShow } from './popup.js';


const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;

const mainForm = document.querySelector('.ad-form');

const typeHousing = mainForm.querySelector('#type');
const priceHousing = mainForm.querySelector('#price');

const timeIn = mainForm.querySelector('#timein');
const timeOut = mainForm.querySelector('#timeout');

const roomNumber = mainForm.querySelector('#room_number');
const guestNumber = mainForm.querySelector('#capacity');
const clarification = mainForm.querySelector('.clarification');
const guestNumberOptions = Array.from(guestNumber.options);

const titleInput = document.querySelector('#title');
const priseInput = document.querySelector('#price');

const guestNumberKeys = {
  1 : ['1'],
  2 : ['1', '2'],
  3 : ['1', '2', '3'],
  100 : ['0'],
}

let numberKey = roomNumber.value;

clarification.style.display = 'none';

const disabledGuestOption = () => {
  guestNumberOptions.forEach((option) => {
    option.disabled = !guestNumberKeys[numberKey].includes(option.value);
  })
}
disabledGuestOption();

roomNumber.addEventListener('change', () => {
  numberKey = roomNumber.value;
  disabledGuestOption();
  guestNumber.value = guestNumberKeys[numberKey][guestNumberKeys[numberKey].length-1];
})

titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;

  if (titleInput.validity.tooShort) {
    titleInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) +' симв.');
  } else if (titleInput.validity.tooLong) {
    titleInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) +' симв.');
  } else if (titleInput.validity.valueMissing) {
    titleInput.setCustomValidity('Обязательное поле');
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
});

priseInput.addEventListener('input', () => {
  if (priseInput.validity.valueMissing) {
    priseInput.setCustomValidity('Обязательное поле');
  } else {
    priseInput.setCustomValidity('');
  }

  priseInput.reportValidity();
});


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
const sendSuccess = () => {
  onPopupSuccessShow();
  mainForm.reset();
  resetMainMarker();
};

mainForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  postData(sendSuccess, onPopupErrorShow, new FormData(evt.target));
});

mainForm.querySelector('.ad-form__reset').addEventListener('click', (evt) => {
  evt.preventDefault();
  mainForm.reset();
  resetMainMarker();
});

export {mainForm};
