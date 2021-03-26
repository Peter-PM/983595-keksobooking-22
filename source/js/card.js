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

const createFhotos = (list, photos) => {
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
  const popupAdress = cloneTemplate.querySelector('.popup__text--address');
  const popupPrice = cloneTemplate.querySelector('.popup__text--price');
  const popupType = cloneTemplate.querySelector('.popup__type');
  const popupCapacity = cloneTemplate.querySelector('.popup__text--capacity');
  const popupTime = cloneTemplate.querySelector('.popup__text--time');
  const popupDescription = cloneTemplate.querySelector('.popup__description');
  const popupFeatures = cloneTemplate.querySelector('.popup__features');
  const popupPhotos = cloneTemplate.querySelector('.popup__photos');


  popupAvatar.src = item.author.avatar;
  popupTitle.textContent = item.offer.title;
  popupAdress.textContent = item.offer.address;
  popupPrice.textContent = item.offer.price + ' ₽/ночь';
  popupType.textContent = housingType[item.offer.type];
  item.offer.rooms || item.offer.guests ? popupCapacity.textContent = `${addRoomsDeclinations(item.offer.rooms)} для ${addGuestsDeclinations(item.offer.guests)}` : popupCapacity.remove()
  // if (!+item.offer.rooms || !+item.offer.guests) {
  //   popupCapacity.remove()
  // } else {popupCapacity.textContent = `${addRoomsDeclinations(item.offer.rooms)} для ${addGuestsDeclinations(item.offer.guests)}`}
  popupTime.textContent = `Заезд после ${item.offer.checkin} выезд до ${item.offer.checkout}`;
  popupDescription.textContent = item.offer.description;
  createFeatures(popupFeatures, item.offer.features);
  createFhotos(popupPhotos, item.offer.photos);

  return cloneTemplate

};

export {createCard};
