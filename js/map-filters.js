/* global _:readonly */

import { fillingPopupMarkers } from './map.js';

const MIN_PRICE = 10000;
const MAX_PRICE = 50000;
const RERENDER_TIMEOUT = 500;

const mapFilterForm = document.querySelector('.map__filters')
const housingType = mapFilterForm.querySelector('#housing-type');
const housingPrice = mapFilterForm.querySelector('#housing-price');
const housingRooms = mapFilterForm.querySelector('#housing-rooms');
const housingGuests = mapFilterForm.querySelector('#housing-guests');

const checkType = (item, ending, element) => {
  if (element.value === 'any') {
    return true
  }
  return item.offer[ending].toString() === element.value;
}

const checkPrice = (item) => {
  switch (housingPrice.value) {
    case 'any':
      return true
    case 'low':
      return item.offer.price < MIN_PRICE
    case 'high':
      return item.offer.price > MAX_PRICE
  }
  return item.offer.price <= MAX_PRICE && item.offer.price >= MIN_PRICE;
}

const checkFeatures = (item) => {
  const checkboxs = mapFilterForm.querySelectorAll('input[type="checkbox"]:checked');
  const itemFeatures = item.offer.features;
  if (!checkboxs.length) {
    return true
  }
  for (let chek of checkboxs) {
    if (!itemFeatures.includes(chek.value)) {
      return false
    }
  }
  return true
}

const checkAllFilters = (item) => {
  return checkType(item, 'type', housingType)
  && checkType(item, 'rooms', housingRooms)
  && checkType(item, 'guests', housingGuests)
  && checkPrice(item)
  && checkFeatures(item)
}

const filtringTypeHousing = (hotels) => {
  fillingPopupMarkers(hotels);

  mapFilterForm.addEventListener('change', (_.debounce(() => {
    fillingPopupMarkers(hotels.filter(checkAllFilters))
  }, RERENDER_TIMEOUT)
  ))
}


export {filtringTypeHousing}
