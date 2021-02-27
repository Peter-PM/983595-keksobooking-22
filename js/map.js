import { mainForm } from './form.js';
import { createCard } from './card.js';
import { activeForm } from './form.js';


const L = window.L;
const TOKIO_CENTER_LAT = 35.68950;
const TOKIO_CENTER_LNG = 139.69171;

const map = L.map('map-canvas').on('load', () => {
  activeForm();
}).setView({
  lat: TOKIO_CENTER_LAT,
  lng: TOKIO_CENTER_LNG,
}, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const MAIN_ICON_SIZE = [52, 52];
const MAIN_ICON_ANCHOR = [26, 52];
const SECOND_ICON_SIZE = [40, 40];
const SECOND_ICON_ANCHOR = [20, 40];

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: MAIN_ICON_SIZE,
  iconAnchor: MAIN_ICON_ANCHOR,
});

const secondPinIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: SECOND_ICON_SIZE,
  iconAnchor: SECOND_ICON_ANCHOR,
});

const mainMarker = L.marker(
  {
    lat: TOKIO_CENTER_LAT,
    lng: TOKIO_CENTER_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const bindPopupMarkers = (allOffers) => {
  for (let oneOffer of allOffers) {
    const secondMarker = L.marker(
      {
        lat: oneOffer.location.lat,
        lng: oneOffer.location.lng,
      },
      {
        icon: secondPinIcon,
      },
    );
    secondMarker.addTo(map).bindPopup(createCard(oneOffer));
  }
};

mainMarker.addTo(map);

const locationPoint = mainMarker.getLatLng();
const DOTS_AFTER_ZERO = 5;

const address = document.querySelector('#address');
address.value = `${locationPoint.lat}, ${locationPoint.lng}`

mainMarker.on('move', (evt) => {
  const targetLatLng = evt.target.getLatLng();

  address.value = `${targetLatLng.lat.toFixed(DOTS_AFTER_ZERO)}, ${targetLatLng.lng.toFixed(DOTS_AFTER_ZERO)}`;
});
//mainMarker.remove();

mainForm.addEventListener('reset', () => {
  mainMarker.remove();
  mainMarker.addTo(map); //не работает
});

export {bindPopupMarkers}