import {getRandomNumber, getRandomNumberPoint} from './util.js';

const OFFER = {
  avatar: {
    min: 1,
    max: 8,
  },
  title: [
    'Best offer',
    'Cool apartment',
    'Mega house',
    'Super villa',
    'Party room',
  ],
  address: 'location.x, location.y',
  type: [
    'palace',
    'flat',
    'house',
    'bungalow',
  ],
  price: {
    min: 1000,
    max: 5000,
  },
  rooms: {
    min: 1,
    max: 10,
  },
  guests: {
    min: 1,
    max: 10,
  },
  checkin: [
    '12:00',
    '13:00',
    '14:00',
  ],
  checkout: [
    '12:00',
    '13:00',
    '14:00',
  ],
  features: [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ],
  description: [
    'Spacious accommodation in the best area!',
    'You will not regret coming!',
    'Cozy nest for lovers.',
    'The best apartment which you saw!',
    'Yo bro this hut is for you!',
  ],
  photos: [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
  ],
  location: {
    xMin: 35.65000,
    xMax: 35.70000,
    yMin: 139.70000,
    yMax: 139.80000,
    point: 5,
  },
};

const getAnnouncement = function () {

  const locationX = getRandomNumberPoint(OFFER.location.xMin, OFFER.location.xMax, OFFER.location.point);
  const locationY = getRandomNumberPoint(OFFER.location.yMin, OFFER.location.yMax, OFFER.location.point);

  return {
    author : {
      avatar : `img/avatars/user0${getRandomNumber(OFFER.avatar.min, OFFER.avatar.max)}.png`,
    },
    offer : {
      title : OFFER.title[getRandomNumber(0, OFFER.title.length - 1)],
      address : locationX + ', ' + locationY,
      price : getRandomNumber(OFFER.price.min, OFFER.price.max),
      type : OFFER.type[getRandomNumber(0, OFFER.type.length - 1)],
      rooms : getRandomNumber(OFFER.rooms.min, OFFER.rooms.max),
      guests : getRandomNumber(OFFER.guests.min, OFFER.guests.max),
      checkin : OFFER.checkin[getRandomNumber(0, OFFER.checkin.length - 1)],
      checkout : OFFER.checkout[getRandomNumber(0, OFFER.checkout.length - 1)],
      features : OFFER.features.slice(0, getRandomNumber(0, OFFER.features.length - 1)),
      description : OFFER.description[getRandomNumber(0, OFFER.description.length - 1)],
      photos : OFFER.photos.slice(0, getRandomNumber(0, OFFER.photos.length - 1)),
    },
    location : {
      x : locationX,
      y : locationY,
    },
  }
};

const allOffers = new Array(10).fill().map(getAnnouncement);

export {allOffers};
