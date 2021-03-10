import { getData } from './api.js';
import { fillingPopupMarkers } from './map.js';
import { showMapErrorPopup } from './popup.js';


getData(fillingPopupMarkers, showMapErrorPopup);
