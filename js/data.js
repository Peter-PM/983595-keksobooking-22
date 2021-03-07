import {getData} from './api.js';
import {fillingPopupMarkers} from './map.js';
import {showMapError} from './popup.js';


getData(fillingPopupMarkers, showMapError);
