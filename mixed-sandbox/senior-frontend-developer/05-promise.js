// Эмуляция обращения клиента к серверу и получения данных
// Минус подхода - использование функций callback внутри других функций callback
console.log('Request data...');

setTimeout(() => {
  console.log('Preparing data 01...');
  const backendData01 = {
    server: 'aws',
    port: 2000,
    status: 'working...',
  };

  setTimeout(() => {
    backendData01.modified = true;
    console.log('Data received 01', backendData01);
  }, 2000);
}, 2000);

// Выше получаем вложенность callback'ов

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
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Preparing data 02...');
    const backendData02 = {
      server: 'aws',
      port: 2000,
      status: 'working...',
    };

    // Вызывая функцию resolve,
    // Говорим, что Promise завершил свое выполнение
    // Для передачи данных дальше их можно передавать в качестве параметра функции resolve
    // Данный параметр будет получен дальше по цепочке в методе then
    resolve(backendData02);

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
p1.then((data02) => {
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      data02.modified = true;
      resolve(data02);
    }, 8000);
  });

  p2.then((clientData02) => {
    console.log('Data received 02', clientData02);
  });
});

// Выше получаем вложенность promise'ов

// Для того, что бы избавиться от вложенности
// Promise можно возвращать
// А затем "чейнить", от слова цепь - chain, методы then
// На каждом этапе можно производить операции и возвращать результат

const p01 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Preparing data 03...');
    const backendData03 = {
      server: 'aws',
      port: 2000,
      status: 'working...',
    };
    resolve(backendData03);
  }, 10000);
});

p01
  .then((data03) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data03.modified = true;
        resolve(data03);
      }, 12000);
    });
  })
  .then((clientData03) => {
    console.log('Data received 03', clientData03);
    clientData03.fromPromise = true;
    return clientData03;
  })
  .then((data) => {
    console.log('Modified', data);
  });
