
const element = document.querySelector('#card').content.querySelector('.popup');

element.style.margin = '50px auto'

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

const roomsDeclinations = (rooms) => {

  if (rooms == 1) {
    rooms += ' комната'
  }
  if (rooms > 1 && rooms < 5) {
    rooms += ' комнаты'
  }
  if (rooms >= 5 && rooms < 20) {
    rooms += ' комнат'
  }

  return rooms
};

const guestsDeclinations = (guests) => {

  if (guests == 1) {
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
  popupCapacity.textContent = `${roomsDeclinations(item.offer.rooms)} для ${guestsDeclinations(item.offer.guests)}`;
  popupTime.textContent = `Заезд после ${item.offer.checkin} выезд до ${item.offer.checkout}`;
  popupDescription.textContent = item.offer.description;
  createFeatures(popupFeatures, item.offer.features);
  createFhotos(popupPhotos, item.offer.photos);

  return cloneTemplate

};

export {createCard};
