const getRandomNumber = function(min, max) {
  if (min < 0 || max < 0 || min == max) {
    throw new Error('Некорректное значение');
  }

  if (min > max) {
    [min, max] = [max, min]
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
}

alert(getRandomNumber(110, 100));

const getRandomNumberPoint = function (min, max, point) {

  if (min < 0 || max < 0 || min == max) {
    throw new Error('Некорректное значение');
  }

  if (min > max) {
    [min, max] = [max, min]
  }

  return +(min + Math.random() * (max - min)).toFixed(point);
}

alert(getRandomNumberPoint(1.2, 1.21, 2))

const OFFER = {
  title: 'Best offer',
  address: 'location.x, location.y',
  type: [
    'palace',
    'flat',
    'house',
    'bungalow',
  ],
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
  description: 'Spacious accommodation in the best area!',
  photos: [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
  ],
};

const getAnnouncement = function () {
  let locationX = getRandomNumberPoint(35.65000, 35.70000, 5);
  let locationY = getRandomNumberPoint(139.70000, 139.80000, 5);

  return {
    author : {
      avatar : `img/avatars/user0${getRandomNumber(1, 8)}.png`,
    },
    offer : {
      title : 'Best offer',
      address : 'location.' + locationX + ', location.' + locationY,
      price : getRandomNumber(1, 100),
      type : OFFER.type[getRandomNumber(0, OFFER.type.length - 1)],
      rooms : getRandomNumber(1, 100),
      guests : getRandomNumber(1, 100),
      checkin : OFFER.checkin[getRandomNumber(0, OFFER.checkin.length - 1)],
      checkout : OFFER.checkout[getRandomNumber(0, OFFER.checkout.length - 1)],
      features : OFFER.features.slice(0, getRandomNumber(0, OFFER.features.length - 1)),
      description : 'Spacious accommodation in the best area!',
      photos : OFFER.photos.slice(0, getRandomNumber(0, OFFER.photos.length - 1)),
    },
    location : {
      x : locationX,
      y : locationY,
    },
  }
};

alert(getAnnouncement());

const allOffers = new Array(10).fill().map(getAnnouncement);

alert(allOffers);
