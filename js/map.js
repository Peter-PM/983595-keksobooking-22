import { allOffers } from './data.js';
import { createCard } from './card.js';
import { activeForm } from './form.js';


const L = window.L;

const map = L.map('map-canvas').on('load', () => {
  activeForm();
}).setView({
  lat: 35.6895000,
  lng: 139.6917100,
}, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const secondPinIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainMarker = L.marker(
  {
    lat: 35.68950,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

for (let oneOffer of allOffers) {
  const secondMarker = L.marker(
    {
      lat: oneOffer.location.x,
      lng: oneOffer.location.y,
    },
    {
      icon: secondPinIcon,
    },
  );
  secondMarker.addTo(map).bindPopup(createCard(oneOffer));
}

mainMarker.addTo(map);

const address = document.querySelector('#address');
address.value = `${mainMarker._latlng.lat}, ${mainMarker._latlng.lng}`

mainMarker.on('move', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});
//mainMarker.remove();
