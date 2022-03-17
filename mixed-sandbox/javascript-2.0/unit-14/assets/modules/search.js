const getSearchCity = () => {
  const currentCity = document.querySelector('.city');

  const idApi = `1b6b5070efbf756fbf0bba5241bcc2db`;
  const urlApi = `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity.textContent},by&APPID=${idApi}`;

  const requestApi = fetch(urlApi)
    .then((res) => res.json())
    .then((data) => data)
    .catch(() => {
      throw new Error('Something went wrong!');
    });

  return requestApi;
};

const setSearchCity = () => {
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
