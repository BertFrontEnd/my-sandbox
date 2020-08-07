// Создание объекта с помощью метода create()
// Метод принимает два параметра - два объекта
// Первый - это прототип для создаваемого объекта
// Другими словами - объект на основании которого создается новый объект
// Второй - определенные поля для создаваемого объекта

const person = Object.create(
  {},
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

  // Вывод поля объекта и его значение
  console.log('Key of person:', key, person[key]);
}

// Для сравнения, обычный объект и цикл for-in
const newPerson = {
  name: 'Berton',
  birthYear: 1986,
};

for (let key in newPerson) {
  // Все выводит
  console.log('Key of newPerson:', key);
}
