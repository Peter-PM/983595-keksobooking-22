
const element = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');

element.style.margin = '50px auto'

const housingType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Доврец',
};

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

const createCard = (item) => {

  const cloneTemplate = element.cloneNode(true);
  const popupAvatar = cloneTemplate.querySelector('.popup__avatar');

  popupAvatar.src = item.author.avatar;
  cloneTemplate.querySelector('.popup__title').textContent = item.offer.title;
  cloneTemplate.querySelector('.popup__text--address').textContent = item.offer.address;
  cloneTemplate.querySelector('.popup__text--price').textContent = item.offer.price + ' ₽/ночь';
  cloneTemplate.querySelector('.popup__type').textContent = housingType[item.offer.type];
  cloneTemplate.querySelector('.popup__text--capacity').textContent = `${roomsDeclinations(item.offer.rooms)} для ${guestsDeclinations(item.offer.guests)}`;
  cloneTemplate.querySelector('.popup__text--time').textContent = `Заезд после ${item.offer.checkin} выезд до ${item.offer.checkout}`;
  cloneTemplate.querySelector('.popup__description').textContent = item.offer.description;
  createFeatures(cloneTemplate.querySelector('.popup__features'), item.offer.features);
  createFhotos(cloneTemplate.querySelector('.popup__photos'), item.offer.photos);
  mapCanvas.appendChild(cloneTemplate);
};

export {createCard};
