/* global _:readonly */
import { getData } from './api.js';
import { fillingPopupMarkers, clearMarkerGroup } from './map.js';

const MIN_PRICE = 10000;
const MAX_PRICE = 50000;
const RERENDER_TIMEOUT = 500;
const DEFAULT_FILTER_VALUE = 'any';

const mapFilterForm = document.querySelector('.map__filters');
const housingType = mapFilterForm.querySelector('#housing-type');
const housingPrice = mapFilterForm.querySelector('#housing-price');
const housingRooms = mapFilterForm.querySelector('#housing-rooms');
const housingGuests = mapFilterForm.querySelector('#housing-guests');

const checkType = (item, ending, element) => {
  if (element.value === DEFAULT_FILTER_VALUE) {
    return true
  }
  return item.offer[ending].toString() === (element.value  || DEFAULT_FILTER_VALUE);
}

const checkPrice = (item) => {
  switch (housingPrice.value) {
    case 'middle':
      return item.offer.price <= MAX_PRICE && item.offer.price >= MIN_PRICE
    case 'low':
      return item.offer.price < MIN_PRICE
    case 'high':
      return item.offer.price > MAX_PRICE
  }
  return true;
}

const checkFeatures = (item) => {
  const checkboxs = Array.from(mapFilterForm.querySelectorAll('input[type="checkbox"]:checked'));
  if (!checkboxs.length) {
    return true
  }
  return checkboxs.every((el) => item.offer.features.includes(el.value))
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
    clearMarkerGroup();
    fillingPopupMarkers(hotels.filter(checkAllFilters))
  }, RERENDER_TIMEOUT)
  ))
}

const resetFilter = () => {
  mapFilterForm.reset();
  getData(filtringTypeHousing);
}


export {filtringTypeHousing, resetFilter}
