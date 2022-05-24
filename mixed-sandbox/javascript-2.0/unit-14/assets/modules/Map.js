/* eslint-disable no-undef */
import ymaps from 'ymaps';
import getLocation from './Location';

export default async function initMap() {
  const obj = await getLocation();
  const latitude = obj.loc.substring(0, 7);
  const longitude = obj.loc.substring(8);

  ymaps
    .load()
    .then((maps) => {
      const myMap = new maps.Map('map', {
        center: [parseFloat(latitude), parseFloat(longitude)],
        zoom: 10,
      });
      return myMap;
    })
    .catch(() => {
      throw new Error('Something went wrong!');
    });
}
