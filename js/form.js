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
let numberKey = roomNumber.value;

const guestNumberKeysMore = {
  1 : {
    en : [1],
    dis : [2,3,0],
  },
  2 : {
    en : [1,2],
    dis : [3,0],
  },
  3 : {
    en : [1,2,3],
    dis : [0],
  },
  100 : {
    en : [0],
    dis : [1,2,3],
  },
}

const setAttributeGuestOption = (num) => {
  guestNumber.querySelector(`option[value="${num}"]`).disabled = true;
};
const removeAttributeGuestOption = (number) => {
  guestNumber.querySelector(`option[value="${number}"]`).disabled = false;
};

const disabledGuestOption = () => {
  clarification.style.display = 'none';
  guestNumberKeysMore[numberKey].dis.forEach((number) => {
    setAttributeGuestOption(number);
  });
};
disabledGuestOption();

roomNumber.addEventListener('change', () => {
  numberKey = roomNumber.value;
  guestNumberKeysMore[numberKey].en.forEach((number) => {
    guestNumber.value = `${number}`;
    removeAttributeGuestOption(number);
  });
  guestNumberKeysMore[numberKey].dis.forEach((number) => {
    setAttributeGuestOption(number);
  });
});


const userNameInput = document.querySelector('#title');

userNameInput.addEventListener('input', () => {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) +' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }

  userNameInput.reportValidity();
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
