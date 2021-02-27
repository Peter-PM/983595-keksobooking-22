import { bindPopupMarkers } from './map.js';

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((array) => {
    bindPopupMarkers(array)
  });
