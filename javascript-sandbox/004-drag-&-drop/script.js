const taskListElement = document.querySelector('.tasks__list');
const taskElements = document.querySelectorAll('.tasks__item');

console.log(taskListElement);
console.log(taskElements);

for (const task of taskElements) {
  task.draggable = true;
}

taskListElement.addEventListener('dragstart', (e) => {
  e.target.classList.add('selected');
});

taskListElement.addEventListener('dragend', (e) => {
  e.target.classList.remove('selected');
});

const getNextElement = (cursorPosition, currentElement) => {
  const currentElementCoords = currentElement.getBoundingClientRect();
  const currentElementCenter = currentElementCoords.y + currentElementCoords.height / 2;

  const nextElement = cursorPosition < currentElementCenter ? currentElement : currentElement.nextElementSibling;

  return nextElement;
};

taskListElement.addEventListener('dragover', (e) => {
  e.preventDefault();

  const activeElement = taskListElement.querySelector('.selected');
  const currentElement = e.target;
  const isMoveable = activeElement !== currentElement && currentElement.classList.contains('tasks__item');

  if (!isMoveable) {
    return;
  }

  /*  const nextElement = currentElement === activeElement.nextElementSibling ? currentElement.nextElementSibling : currentElement; */

  const nextElement = getNextElement(e.clientY, currentElement);

  if ((nextElement && activeElement === nextElement.previousElementSibling) || activeElement === nextElement) {
    return;
  }

  taskListElement.insertBefore(activeElement, nextElement);
});
