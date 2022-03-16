const getWeather = () => {
  const currentCity = document.querySelector('.city');

  const idApi = `1b6b5070efbf756fbf0bba5241bcc2db`;
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity.textContent}&appid=${idApi}`;

  const requestApi = fetch(urlApi)
    .then((res) => res.json())
    .then((data) => data)
    .catch(() => {
      throw new Error('Something went wrong!');
    });

  return requestApi;
};

async function setWeather() {
  const domTemperature = document.querySelector('.temperature');
  const domCurrentWeatherIcon = document.querySelector('.current-weather-icon');
  const domFeels = document.querySelector('.feels');
  const domWind = document.querySelector('.wind');
  const domHumidity = document.querySelector('.humidity');

  const weather = await getWeather();

  domTemperature.textContent = `${Math.round(weather.main.temp - 273.15)}°`;
  domCurrentWeatherIcon.style.backgroundImage = `url('./assets/img/${weather.weather[0].icon}.svg`;
  domFeels.textContent = `${Math.round(weather.main.feels_like - 273.15)}°`;
  domWind.textContent = `${Math.round(weather.wind.speed)} m/s`;
  domHumidity.textContent = `${Math.round(weather.wind.speed)}%`;
}

export { setWeather };
