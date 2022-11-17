/** ЗАДАЧА 52 - Параметры функции по умолчанию
 *
 * 1. Создайте функцию "weatherForecast" с двумя параметрами "city" и "weather"
 *
 * 2. Если второй аргумент отсутствует,
 * параметр "weather" должен получить значение "Отличная погода!"
 *
 * ВАЖНО:
 *  - Сначала решите это БЕЗ параметра функции по умолчанию
 *  - Закомментируйте предыдущее решение
 * и решите ту же задачу с параметром функции по умолчанию
 *
 * ПРИМЕЧАНИЕ:
 * Внимательно сравните свои результаты с результатами тестовых вызовов
 */

// Solution 1

/* const weatherForecast = (city, weather) => {
  if (weather == undefined) {
    weather = 'Отличная погода!';
  }
  return `Прогноз погоды для города ${city}: ${weather}`;
}; */

// Solution 2

/* const weatherForecast = (city, weather) =>
  `Прогноз погоды для города ${city}: ${
    weather ? weather : 'Отличная погода!'
  }` */ // Solution 3

const weatherForecast = (city, weather = 'Отличная погода!') =>
  `Прогноз погоды для города ${city}: ${weather}`;
console.log(weatherForecast('Dubai', 'Солнечно'));
// Прогноз погоды для города Dubai: Солнечно
console.log(weatherForecast('London', 'Небольшой дождь'));
// Прогноз погоды для города London: Небольшой дождь
console.log(weatherForecast('Paris'));
// Прогноз погоды для города Paris: Отличная погода!
console.log(weatherForecast('Miami', ''));
// Прогноз погоды для города Miami:
console.log(weatherForecast('Las Vegas', undefined));
// Прогноз погоды для города Las Vegas: Отличная погода!
