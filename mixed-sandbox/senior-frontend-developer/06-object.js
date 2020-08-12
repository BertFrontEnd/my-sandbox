// Создание объекта с помощью метода create()
// Метод принимает два параметра - два объекта
// Первый - это прототип для создаваемого объекта
// Другими словами - объект на основании которого создается новый объект
// Второй - определенные поля для создаваемого объекта

const person = Object.create(
  {
    calculateAge() {
      console.log(
        'Age from calculateAge:',
        new Date().getFullYear() - this.birthYear,
      );
    },
  },
  {
    // Создаваемое поле является объектом
    // В отличии от обычного объекта
    // Эти поля настраиваемые
    // В них можно передавать параметры
    // Параметр - это Property Descriptor - PD

    // name - ключ
    name: {
      // value - значение ключа
      value: 'Berton',
      enumerable: true,
      writable: true,
      // Позволяет изменять поле объекта
      configurable: true,
    },

    birthYear: {
      value: 1986,
      enumerable: false,
      writable: false,
      configurable: false,
    },

    age: {
      // getters
      // Возвращает значение
      // Вызывается поле поле/ключ
      // Но срабатывает метода get
      get() {
        return new Date().getFullYear() - this.birthYear;
      },
      // setters
      // Устанавливает значение
      // В качестве аргумента передается како-то значение
      // Которое нужно установить
      set(value) {
        // Выводит новое установленное значение
        // Без изменения объекта
        console.log('Set age:', value);
        // Задание цвета фона документа
        document.body.style.backgroundColor = 'blue';
      },
    },
  },
);

// Поле объекта не изменится, если не задан PD {writable: true,}
// Значение по умолчанию {writable: false,}
person.name = 'BertFrontEnd';

console.log(person);

// Создание переменной key на каждой итерации объекта person
// В цикле for-in создаваемая переменная
// Соответствует ключу/полю в объекте
for (let key in person) {
  // Ничего не выводит, если не задан PD {enumerable: true,}
  // Значение по умолчанию {enumerable: false,}

  // Что бы не пробегаться циклом по прототипу объекта person
  // В том числе и по первому параметру - первому объекту
  // Создается условие
  // Рекомендуется использовать данную проверку
  // При использовании цикла (for...in) на объекте

  if (person.hasOwnProperty(key)) {
    // Вывод поля объекта и его значение
    console.log('Key of person:', key, person[key]);
  }
}

// Вызов метода calculateAge() из первого объекта - первого параметра,
// Объекта person
person.calculateAge();

// Использование getters
console.log('getter age:', person.age);

// Использование setters
// Установка значения ключа/поля age
// Позволяет выполнить любой код в setters
let val = (person.age = 35);
console.log('setter age:', val);
console.log('age:', person.age);

// Объект person
console.log('person:', person);

// Для сравнения, обычный объект и цикл for-in
const newPerson = {
  name: 'Berton',
  birthYear: 1986,
};

for (let key in newPerson) {
  // Все выводит
  console.log('Key of newPerson:', key);
}
