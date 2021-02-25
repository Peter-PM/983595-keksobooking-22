
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

//Активация и деактивация формы
const mapFiltersForm = document.querySelector('.map__filters');
const mainForm = document.querySelector('.ad-form');
const selects = mapFiltersForm.querySelectorAll('select');
const fieldsets = document.querySelectorAll('fieldset');

mapFiltersForm.classList.add('ad-form--disabled');
mainForm.classList.add('ad-form--disabled');

const addDisabled = (element) => {
  element.disabled = true;
};

const removeDisabled = (element) => {
  element.disabled = false;
};

selects.forEach(addDisabled);
fieldsets.forEach(addDisabled);

const activeForm = () => {
  mapFiltersForm.classList.remove('ad-form--disabled');
  mainForm.classList.remove('ad-form--disabled');
  selects.forEach(removeDisabled);
  fieldsets.forEach(removeDisabled);
}

export {activeForm};
