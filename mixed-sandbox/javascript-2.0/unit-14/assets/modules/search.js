import { setWeather } from './weather.js';
import { setForecast } from './forecast.js';

const getSearchCity = () => {
  const input = document.querySelector('#search-area');
  const button = document.querySelector('.btn-search');
  const domCity = document.querySelector('.city');
  const domCountry = document.querySelector('.country');

  button.addEventListener('click', async () => {
    domCity.textContent = input.value;
    domCountry.textContent = '';
    await setWeather();
    await setForecast();
    getSearchCity();
  });
};

export { getSearchCity };
