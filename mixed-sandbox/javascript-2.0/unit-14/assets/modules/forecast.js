export function getForecast() {
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
}

async function setForecast() {
  const domFirstTemperature = document.querySelector(
    '.first-temperature > span',
  );
  const domFirstIcon = document.querySelector('.icon-first-weather');

  const domSecondTemperature = document.querySelector(
    '.second-temperature > span',
  );
  const domSecondIcon = document.querySelector('.icon-second-weather');

  const domThirdTemperature = document.querySelector(
    '.third-temperature > span',
  );
  const domThirdIcon = document.querySelector('.icon-third-weather');

  const forecast = await getForecast();

  domFirstTemperature.textContent = `${Math.round(
    forecast.list[8].main.temp - 273.15,
  )}°`;
  domFirstIcon.style.backgroundImage = `url('./assets/img/${forecast.list[8].weather[0].icon}.svg`;

  domSecondTemperature.textContent = `${Math.round(
    forecast.list[16].main.temp - 273.15,
  )}°`;
  domSecondIcon.style.backgroundImage = `url('./assets/img/${forecast.list[16].weather[0].icon}.svg`;

  domThirdTemperature.textContent = `${Math.round(
    forecast.list[24].main.temp - 273.15,
  )}°`;
  domThirdIcon.style.backgroundImage = `url('./assets/img/${forecast.list[24].weather[0].icon}.svg`;
}

export { setForecast };
