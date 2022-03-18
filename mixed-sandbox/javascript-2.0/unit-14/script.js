import { setTime } from './assets/modules/time.js';
import {
  setCurrentDay,
  setForecastDay,
  setCurrentDate,
  setCurrentMonth,
  setCurrentYear,
} from './assets/modules/date.js';
import { setLocation } from './assets/modules/location.js';
import { setWeather } from './assets/modules/weather.js';
import { setForecast } from './assets/modules/forecast.js';
import { setSearchCity } from './assets/modules/search.js';

setTime();
setCurrentDay();
setForecastDay();
setCurrentDate();
setCurrentMonth();
setCurrentYear();
await setLocation();
await setWeather();
await setForecast();

const button = document.querySelector('.btn-search');

button.addEventListener('click', (e) => {
  e.preventDefault();
  setSearchCity();
});
