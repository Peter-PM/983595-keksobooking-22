const Consts = {
  ZERO: 0,
  ONE: 1,
  FIVE: 5,
  TWENTY: 20,
}

const element = document.querySelector('#card').content.querySelector('.popup');

const createFeatures = (list, features) => {
  list.innerHTML = '';
  for (let i = 0; i < features.length; i++) {
    const featuresItem = document.createElement('li');
    featuresItem.classList.add('popup__feature', `popup__feature--${features[i]}`);
    list.appendChild(featuresItem);
  }
};

const createPhotos = (list, photos) => {
  list.innerHTML = '';
  for (let i = 0; i < photos.length; i++) {
    const photosItem = document.createElement('img');
    photosItem.className = 'popup__photo';
    photosItem.width = '45';
    photosItem.height = '40';
    photosItem.alt = 'Фотография жилья';
    photosItem.src = photos[i];
    list.appendChild(photosItem);
  }
};

const addRoomsDeclinations = (rooms) => {

  if (rooms === Consts.ONE) {
    rooms += ' комната'
  }
  if (rooms > Consts.ONE && rooms < Consts.FIVE) {
    rooms += ' комнаты'
  }
  if (rooms >= Consts.FIVE && rooms <= Consts.TWENTY) {
    rooms += ' комнат'
  }

  return rooms
};

const addGuestsDeclinations = (guests) => {

  if (guests === Consts.ONE) {
    guests += ' гостя'
  } else {
    guests += ' гостей'
  }

  return guests
};

const housingType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Доврец',
};

const createCard = (item) => {

  const cloneTemplate = element.cloneNode(true);
  const popupAvatar = cloneTemplate.querySelector('.popup__avatar');
  const popupTitle = cloneTemplate.querySelector('.popup__title');
  const popupAddress = cloneTemplate.querySelector('.popup__text--address');
  const popupPrice = cloneTemplate.querySelector('.popup__text--price');
  const popupType = cloneTemplate.querySelector('.popup__type');
  const popupCapacity = cloneTemplate.querySelector('.popup__text--capacity');
  const popupTime = cloneTemplate.querySelector('.popup__text--time');
  const popupDescription = cloneTemplate.querySelector('.popup__description');
  const popupFeatures = cloneTemplate.querySelector('.popup__features');
  const popupPhotos = cloneTemplate.querySelector('.popup__photos');

  item.author.avatar ?  popupAvatar.src = item.author.avatar : popupAvatar.remove();
  item.offer.title ? popupTitle.textContent = item.offer.title : popupTitle.remove();
  item.offer.address ? popupAddress.textContent = item.offer.address : popupAddress.remove();
  item.offer.price ? popupPrice.textContent = item.offer.price + ' ₽/ночь' : popupPrice.remove();
  item.offer.type ? popupType.textContent = housingType[item.offer.type] : popupType.remove();
  item.offer.rooms && item.offer.guests ? popupCapacity.textContent = `${addRoomsDeclinations(item.offer.rooms)} для ${addGuestsDeclinations(item.offer.guests)}` : popupCapacity.remove();
  item.offer.checkin && item.offer.checkout ? popupTime.textContent = `Заезд после ${item.offer.checkin} выезд до ${item.offer.checkout}` : popupTime.remove();
  item.offer.description ? popupDescription.textContent = item.offer.description : popupDescription.remove();
  item.offer.features ? createFeatures(popupFeatures, item.offer.features) : popupFeatures.remove();
  item.offer.photos ? createPhotos(popupPhotos, item.offer.photos) : popupPhotos.remove();

  return cloneTemplate

};

export {createCard};
