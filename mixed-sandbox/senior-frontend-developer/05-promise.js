// Эмуляция обращения клиента к серверу и получения данных
// Минус подхода - использование функций callback внутри других функций callback
console.log('Request data...');

setTimeout(() => {
  console.log('Preparing data...');
  const backendData = {
    server: 'aws',
    port: 2000,
    status: 'working...',
  };

  setTimeout(() => {
    backendData.modified = true;
    console.log('Data received', backendData);
  }, 2000);
}, 2000);

// Создания инстанса (копии) от глобального класса Promise
// Глобальный класс Promise принимает функцию callback
// Эта функция в свою очередь принимает два параметра
// Эти два параметра - это тоже функции
// В результате получаем функцию callback в конструкторе класса Promise
// Обычно внутри класса Promise пишется асинхронный код
// Но может и синхронный,
// Хотя в таком случае именно класс Promise и не нужен

// Функция resolve вызывается
// Когда асинхронная функция выполнена успешно
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Preparing data...');
    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working...',
    };

    // Вызывая функцию resolve,
    // Говорим, что Promise завершил свое выполнение
    // Для передачи данных дальше их можно передавать в качестве параметра функции resolve
    // Данный параметр будет получен дальше по цепочке в методе then
    resolve(backendData);

    // Задержка в 6 секунд эмулирует выполнение асинхронной функции
    // После чего вызывается функция resolve
  }, 6000);
});

// Использование метода then у класса Promise
// Данный метод then будет вызван после выполнения предыдущей асинхронной функции,
// То есть после функции resolve
// В качестве параметра функции callback метода then
// Приметается параметр переданный на предыдущем этапе
// В качестве параметра функции resolve
// Имя параметра может отличаться
p.then((data) => {
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data);
    }, 8000);
  });

  p2.then((clientData) => {
    console.log('Data received', clientData);
  });
});
