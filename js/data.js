import { getData } from './api.js';
import { filtringTypeHousing } from './map-filters.js';
import { showMapErrorPopup } from './popup.js';


getData(filtringTypeHousing, showMapErrorPopup);
