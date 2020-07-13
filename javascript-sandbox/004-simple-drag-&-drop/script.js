// поиск всего списка
const taskListElement = document.querySelector('.tasks__list');
// поиск элемента списка
const taskElements = document.querySelectorAll('.tasks__item');

// присвоение элементу возможности перемещаться
for (const task of taskElements) {
  task.draggable = true;
}

// добавление слушателя начало перемещения элемента
// добавление стиля перемещаемому элементу
taskListElement.addEventListener('dragstart', (e) => {
  e.target.classList.add('selected');
});

// добавление слушателя завершения перемещения элемента
// удаление стиля перемещаемого элемента
taskListElement.addEventListener('dragend', (e) => {
  e.target.classList.remove('selected');
});

// отслеживание местоположения перемещаемого элемента относительно других элементов
// слушатель срабатывает каждые несколько сотен миллисекунд, пока перемещаемый элемент находится над зоной, в которую он может быть сброшен
taskListElement.addEventListener('dragover', (e) => {
  // создание области, в которую перемещаемый элемент может быть сброшен, отменой действия по умолчанию и его переопределение
  e.preventDefault();

  // поиск выбранного элемента для перемещения
  const activeElement = taskListElement.querySelector('.selected');

  // поиск текущего элемента - элемента на котором сработало событие 'dragover' - возможность сброса
  const currentElement = e.target;

  // проверка, что 'dragover' - возможность сброса - сработало не на выбранном элементе
  // проверка, что 'dragover' - возможность сброса - сработало на элементе списка, не на пустом пространстве
  const isMoveable = activeElement !== currentElement && currentElement.classList.contains('tasks__item');

  // прерывание дальнейших действий, если вышеприведенные условия не выполняются
  if (!isMoveable) {
    return;
  }

  // поиск элемента, перед которым нужно осуществить вставку
  // сравнение положения выбранного элемента и текущего, на который наведен курсор
  // const nextElement = currentElement === activeElement.nextElementSibling ? currentElement.nextElementSibling : currentElement;

  // создание функции для определения середины текущего элемента и элемента, перед которым нужно вставить перемещаемый элемент
  // на вход функции принимаются два параметра: вертикальный координата курсора и текущий элемент, на котором сработало событие 'dragover'
  const getNextElement = (cursorPosition, currentElement) => {
    // getBoundingClientRect вызывается на элементе и возвращает объект с информацией о размерах и координатах элемента относительно вьюпорта
    const currentElementCoords = currentElement.getBoundingClientRect();

    // определение середины текущего элемента путем суммы его вертикальной координаты (верхний левый край) и половины его высоты
    const currentElementCenter = currentElementCoords.y + currentElementCoords.height / 2;

    // проверка условия - если курсор выше центра текущего элемента, nextElement остается равен текущему элементу, иначе - следующему элементу DOM - перемещаемому элементу
    const nextElement = cursorPosition < currentElementCenter ? currentElement : currentElement.nextElementSibling;

    return nextElement;
  };

  // применение функции getNextElement для нахождения nextElement
  // первым параметром функция getNextElement принимает положение курсора - e.clientY
  // вторым параметром функция getNextElement принимает текущий элемент - currentElement
  const nextElement = getNextElement(e.clientY, currentElement);

  // если курсор не пересек середину элемента - ничего делать не нужно
  // но в такой ситуации скрипт осуществляет вставку в DOM текущего элемента на то же место при каждом срабатывании события 'dragover'
  // проверка того, что курсор не пересек середину элемента: если порядок не изменился - выходим из функции
  if ((nextElement && activeElement === nextElement.previousElementSibling) || activeElement === nextElement) {
    return;
  }

  // вставка перемещаемого элемента на новое место с помощью метода insertBefore
  // insertBefore вызывается на родительском элемента - taskListElement
  // первым параметром insertBefore принимает вставляемый элемент (в данном случае - перемещаемый элемент) - activeElement
  // вторым параметром insertBefore принимает элемент, перед которым нужно вставить элемент, указанный первым параметром
  taskListElement.insertBefore(activeElement, nextElement);
});
