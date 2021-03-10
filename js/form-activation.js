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
