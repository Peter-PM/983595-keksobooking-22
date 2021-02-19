import {getAnnouncement} from './data.js';

const templateCard = document.querySelector('#card').content;
const element = templateCard.querySelector('.popup');
const body = document.querySelector('body');

element.style.margin = '50px auto'



const cloneTemplate = element.cloneNode(true);
cloneTemplate.querySelector('.popup__avatar').src = getAnnouncement().author.avatar;
cloneTemplate.querySelector('.popup__title').textContent = getAnnouncement().offer.title;
cloneTemplate.querySelector('.popup__text--address').textContent = getAnnouncement().offer.address;
cloneTemplate.querySelector('.popup__text--price').textContent = getAnnouncement().offer.price + ' ₽/ночь';
cloneTemplate.querySelector('.popup__type').textContent = getAnnouncement().offer.type;
cloneTemplate.querySelector('.popup__text--capacity').textContent = `${getAnnouncement().offer.rooms} комнаты для ${getAnnouncement().offer.rooms} гостей`;
cloneTemplate.querySelector('.popup__text--time').textContent = `Заезд после ${getAnnouncement().offer.checkin} выезд до ${getAnnouncement().offer.checkout}`;
cloneTemplate.querySelector('.popup__description').textContent = getAnnouncement().offer.description;

body.appendChild(cloneTemplate);

