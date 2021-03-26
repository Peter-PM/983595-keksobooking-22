import { resetMainMarker } from './map.js';
import { postData } from './api.js';
import { onPopupErrorShow, onPopupSuccessShow } from './popup.js';
import { resetFilter } from './map-filters.js';


const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;

const mainForm = document.querySelector('.ad-form');

const typeHousing = mainForm.querySelector('#type');
const priceHousing = mainForm.querySelector('#price');

const timeIn = mainForm.querySelector('#timein');
const timeOut = mainForm.querySelector('#timeout');

const roomNumber = mainForm.querySelector('#room_number');
const guestNumber = mainForm.querySelector('#capacity');
const guestNumberOptions = Array.from(guestNumber.options);

const titleInput = document.querySelector('#title');
const priseInput = document.querySelector('#price');

const guestNumberKeys = {
  1 : ['1'],
  2 : ['1', '2'],
  3 : ['1', '2', '3'],
  100 : ['0'],
}

const housingPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const disabledGuestOption = () => {
  guestNumberOptions.forEach((option) => {
    option.disabled = !guestNumberKeys[roomNumber.value].includes(option.value);
    option.selected = !option.disabled;
  })
}
disabledGuestOption();

roomNumber.addEventListener('change', () => {
  disabledGuestOption();
})

const checkTitleInputValidity = () => {
  const valueLength = titleInput.value.length;
  if (titleInput.validity.tooShort) {
    titleInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) +' симв., бро!');
  } else if (titleInput.validity.tooLong) {
    titleInput.setCustomValidity('Удали лишние ' + (valueLength - MAX_NAME_LENGTH) +' симв., бро!');
  } else if (titleInput.validity.valueMissing) {
    titleInput.setCustomValidity('Обязательное поле, бро!');
  } else {
    titleInput.setCustomValidity('');
  }
}
titleInput.addEventListener('invalid', () => {
  checkTitleInputValidity();
});

titleInput.addEventListener('input', () => {
  checkTitleInputValidity();
  titleInput.reportValidity();
});

const checkPriseInputValidity = () => {
  if (priseInput.validity.valueMissing) {
    priseInput.setCustomValidity('Обязательное поле, бро!');
  } else if (priseInput.validity.rangeUnderflow) {
    priseInput.setCustomValidity('Нужно больше золота! (' + priseInput.min + ')');
  } else if (priseInput.validity.rangeOverflow) {
    priseInput.setCustomValidity('Ну это тумач!');
  } else {
    priseInput.setCustomValidity('');
  }
}

priseInput.addEventListener('invalid', () => {
  checkPriseInputValidity();
});

priseInput.addEventListener('input', () => {
  checkPriseInputValidity();
  priseInput.reportValidity();
});

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
  resetFilter();
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
