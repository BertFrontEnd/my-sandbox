/* eslint-disable object-curly-newline */
import { currentDate, forecastDate } from './Date';
import getLocation from './Location';
import getForecast from './Forecast';

import {
  City,
  Country,
  Day,
  DateNum,
  DateStr,
  Year,
  Hours,
  Minutes,
  Seconds,
  Temperature,
  currentWeatherIcon,
  Feels,
  Wind,
  Humidity,
  firstDay,
  firstTemperature,
  iconFirstWeather,
  secondDay,
  secondTemperature,
  iconSecondWeather,
  thirdDay,
  thirdTemperature,
  iconThirdWeather,
  Latitude,
  Longitude,
} from './Elements';

export function renderTime() {
  const obj = currentDate();
  Day.textContent = obj.day;
  DateNum.textContent = obj.dateNum;
  DateStr.textContent = obj.dateStr;
  Year.textContent = obj.year;
  Hours.textContent = obj.hour;
  Minutes.textContent = obj.minute;
  Seconds.textContent = obj.second;
}

export async function renderLocation() {
  const obj = await getLocation();

  City.textContent = obj.city;
  Country.textContent = obj.country;

  Latitude.textContent = obj.loc.substring(0, 7);
  Longitude.textContent = obj.loc.substring(8);
}

export async function renderForecast() {
  const obj = await getForecast();
  // eslint-disable-next-line no-console
  console.log(obj);
  const day = forecastDate();

  Temperature.textContent = Math.round(obj.list[0].main.temp - 273.15);
  currentWeatherIcon.setAttribute(
    'src',
    `./assets/img/${obj.list[0].weather[0].icon}.svg`,
  );
  Feels.textContent = Math.round(obj.list[0].main.feels_like - 273.15);
  Wind.textContent = obj.list[0].wind.speed;
  Humidity.textContent = obj.list[0].main.humidity;

  firstDay.textContent = day.firstDay;
  firstTemperature.textContent = Math.round(obj.list[8].main.temp - 273.15);
  iconFirstWeather.setAttribute(
    'src',
    `./assets/img/${obj.list[8].weather[0].icon}.svg`,
  );

  secondDay.textContent = day.secondDay;
  secondTemperature.textContent = Math.round(obj.list[16].main.temp - 273.15);
  iconSecondWeather.setAttribute(
    'src',
    `./assets/img/${obj.list[16].weather[0].icon}.svg`,
  );

  thirdDay.textContent = day.thirdDay;
  thirdTemperature.textContent = Math.round(obj.list[24].main.temp - 273.15);
  iconThirdWeather.setAttribute(
    'src',
    `./assets/img/${obj.list[24].weather[0].icon}.svg`,
  );
}
