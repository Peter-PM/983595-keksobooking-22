import { createCard } from './card.js';
import { activateForm } from './form-activation.js';


const L = window.L;
const TOKIO_CENTER_LAT = 35.68950;
const TOKIO_CENTER_LNG = 139.69171;
const MAP_SIZE = 9;
const MARKERS_NUMBER = 10;
const MAIN_ICON_SIZE = [52, 52];
const MAIN_ICON_ANCHOR = [26, 52];
const SECOND_ICON_SIZE = [40, 40];
const SECOND_ICON_ANCHOR = [20, 40];
const DOTS_AFTER_ZERO = 5;

const address = document.querySelector('#address');

const markerGroup = L.layerGroup();

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat: TOKIO_CENTER_LAT,
    lng: TOKIO_CENTER_LNG,
  }, MAP_SIZE)
;

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

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

const locationPoint = mainMarker.getLatLng();

const fillingPopupMarkers = (allOffers) => {
  markerGroup.clearLayers();
  allOffers
    .slice(0, MARKERS_NUMBER)
    .forEach((oneOffer) => {
      const secondMarker = L.marker(
        {
          lat: oneOffer.location.lat,
          lng: oneOffer.location.lng,
        },
        {
          icon: secondPinIcon,
        },
      );
      secondMarker.bindPopup(createCard(oneOffer));
      markerGroup.addLayer(secondMarker);
    })
};

markerGroup.addTo(map)
mainMarker.addTo(map);

address.value = `${locationPoint.lat}, ${locationPoint.lng}`

mainMarker.on('move', (evt) => {
  const targetLatLng = evt.target.getLatLng();

  address.value = `${targetLatLng.lat.toFixed(DOTS_AFTER_ZERO)}, ${targetLatLng.lng.toFixed(DOTS_AFTER_ZERO)}`;
});

const resetMainMarker = () => {
  map.setView(
    {
      lat: TOKIO_CENTER_LAT,
      lng: TOKIO_CENTER_LNG,
    },
    MAP_SIZE);
  mainMarker.setLatLng(
    {
      lat: TOKIO_CENTER_LAT,
      lng: TOKIO_CENTER_LNG,
    },
  );
  address.value = `${TOKIO_CENTER_LAT}, ${TOKIO_CENTER_LNG}`
};


const clearMarkerGroup = () => {
  markerGroup.clearLayers();
}


export {fillingPopupMarkers, resetMainMarker, clearMarkerGroup};
