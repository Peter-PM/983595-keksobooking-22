import { fillingPopupMarkers } from './map.js';

const mapFilterForm = document.querySelector('.map__filters')
const housingType = mapFilterForm.querySelector('#housing-type');
const housingPrice = mapFilterForm.querySelector('#housing-price');
const housingRooms = mapFilterForm.querySelector('#housing-rooms');
const housingGuests = mapFilterForm.querySelector('#housing-guests');

const checkType = (item) => {
  if (housingType.value === 'any') {
    return true
  }
  return item.offer.type === housingType.value;
};

const checkPrice = (item) => {
  if (housingPrice.value === 'any') {
    return true
  }
  if (item.offer.price < 10000) {
    return housingPrice.value == 'low'
  }
  if (item.offer.price > 50000) {
    return housingPrice.value == 'high'
  }
  return housingPrice.value == 'middle';
}

const checkRooms = (item) => {
  if (housingRooms.value === 'any') {
    return true
  }
  return item.offer.rooms == housingRooms.value;
};

const checkGuests = (item) => {
  if (housingGuests.value === 'any') {
    return true
  }
  return item.offer.guests == housingGuests.value;
};

const checkFeatures = (item) => {
  const checkboxs = mapFilterForm.querySelectorAll('input[type="checkbox"]:checked');
  const itemFeatures = item.offer.features;
  checkboxs.forEach((option) => {
    if (itemFeatures.includes(option.value)) {
      return true
    }
    //console.log(itemFeatures.includes(option.value))
  })
}

const checkAllFilters = (item) => {
  return checkType(item) && checkRooms(item) && checkGuests(item) && checkPrice(item) && checkFeatures(item)
}

const filtringTypeHousing = (hotels) => {
  fillingPopupMarkers(hotels);
  //console.log(hotels);

  mapFilterForm.addEventListener('change', () => {
    fillingPopupMarkers(hotels.filter(checkAllFilters));
  });
};


export {filtringTypeHousing}
