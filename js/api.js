import { fillingPopupMarkers } from './map.js';
import { mainForm } from './form.js';
import { popupShow } from './popup.js';

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((array) => {
    fillingPopupMarkers(array)
  })
  .catch((err) => {
    alert(err);
  })
;

mainForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: new FormData(evt.target),
    })
    .then((response) => {
      popupShow(response)
    })
    .catch((err) => {
      alert(err)
    })
});
