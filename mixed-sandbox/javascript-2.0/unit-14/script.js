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

setTime();
setCurrentDay();
setForecastDay();
setCurrentDate();
setCurrentMonth();
setCurrentYear();
await setLocation();
await setWeather();
await setForecast();
