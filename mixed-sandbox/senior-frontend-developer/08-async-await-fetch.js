// Функция, возвращающая Promise
// Который делает некоторую искусственную задержку

// В конструктор Promise передается функция resolve
// С помощью setTimeout, после завершения указанной задержки,
// Будет вызываться функция callback setTimeout'a - resolve
const delay = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

// Вызов функции
delay(1000).then(() => console.log('After 1 sec'));

// Запись ссылку в переменную
const url = 'https://jsonplaceholder.typicode.com/todos';

// Функция получения данных с сервера с искусственной задержкой
function fetchToDos() {
  console.log('Fetch todo started...');
  // Возврат данных после задержки с помощью функции,
  // Возвращающей Promise
  return (
    delay(2000)
      // Далее используется fetch, аналог  AJAX,
      // Делает асинхронный запрос
      // на сервер, и возвращает Promise
      .then(() => fetch(url))
      // Получаем данные response в виде json
      // Вызываем response метод json() - некий API
      // В методе fetch, для того, что бы парсить
      // Полученные данные
      .then((response) => response.json())
  );
}

// Вызов функции
fetchToDos()
  // Получение данных и их вывод
  .then((data) => {
    console.log('Data: ', data);
  })
  // Обработка ошибок
  .catch((e) => console.error(e));
