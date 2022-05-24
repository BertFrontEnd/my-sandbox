const getLocation = () => {
  const urlApi = 'https://ipinfo.io?token=5f652187a3f894';

  const requestApi = fetch(urlApi)
    .then((res) => res.json())
    .then((data) => data)
    .catch(() => {
      throw new Error('Something went wrong!');
    });

  return requestApi;
};

async function setLocation() {
  const domCity = document.querySelector('.city');
  const domCountry = document.querySelector('.country');

  const location = await getLocation();

  domCity.textContent = location.city;
  domCountry.textContent = location.country;
}

export { setLocation };
