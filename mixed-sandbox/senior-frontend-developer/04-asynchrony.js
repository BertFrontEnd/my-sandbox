// setTimeout() - метода - часть браузерного API
// window.setTimeout() - полная запись вызова метода

// Код выполняется синхронно:
// Движок забрасывает код в стек и выполняет его
// Но дойдя до setTimeout() - регистрируется функция,
// которая должна быть выполнена через 2 секунды
// И движок начинает ждать выполнение функции в setTimeout(),
// Но не блокируя остальной код

// Функция, которая передается в setTimeout() - функция callback

console.log('Start-01');
console.log('Start-02');

// Полная запись, с передачей Callback-функции в виде анонимной функции
window.setTimeout(function () {
  console.log('Inside timeout, after 5 seconds');
}, 5000);

// Function Declaration - объявленная функция
function timeOut2Sec() {
  console.log('Inside timeout, after 2 seconds');
}

// Запись, с передачей Callback-функции в виде Function Declaration
// Callback-функцию нужно передавать, но не вызывать - без скобок,
// Иначе она сразу же сработает в потоке с синхронным кодом
setTimeout(timeOut2Sec, 2000);
console.log('End');

// Event Loop: Call Stack ->  Web Apis -> Callback Queue -> Call Stack
// Цикл Событий: Стек Вызова -> Веб Апи -> Очередь Callback-функций -> Стек вызова

// Все асинхронные операции, чаще всего это функции, проходят по Event Loop
// Все синхронные - только через Call Stack

// Web Apis -> тут хранится операция/функция указанное время или до определенного действия пользователя
// Callback Queue -> тут ждут свое выполнение операции/функции после истечения указанного времени или после определенного действия пользователя

// Если передать setTimeout "0",
// То функция выполнится первой после всего синхронного кода согласно потоку
setTimeout(function () {
  console.log('Inside timeout, after 0 seconds');
}, 0);
