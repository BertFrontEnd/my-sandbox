/* import getLocation from './Location'; */

export default async function getForecast() {
  // eslint-disable-next-line operator-linebreak
  const urlApi =
    'https://api.openweathermap.org/data/2.5/forecast?q=Minsk,by&APPID=1b6b5070efbf756fbf0bba5241bcc2db';

  /*     const obj = await getLocation();
    const lat = parseFloat(obj.loc.substring(0, 7));
    const lon = parseFloat(obj.loc.substring(8));
    const urlApi = `https://api.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=1b6b5070efbf756fbf0bba5241bcc2db`; */

  const requestApi = fetch(urlApi)
    .then((res) => res.json())
    .then((data) => data)
    .catch(() => {
      throw new Error('Something went wrong!');
    });

  return requestApi;
}
