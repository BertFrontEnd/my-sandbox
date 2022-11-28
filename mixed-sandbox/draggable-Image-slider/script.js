const carousel = document.querySelector('.carousel');
const firstImage = carousel.querySelectorAll('img')[0];
const arrowIcons = document.querySelectorAll('.wrapper i');

let isDragStart = false;
let isDragging = false;
let prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // получение максимальной ширины прокрутки - разность всей ширины карусели и видимой части карусели
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'block'; // если карусель находится в крайнем левом положении - на первой картинке - скрыть иконку "влево", иначе отобразить
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? 'none' : 'block'; // если карусель находится в крайнем правом положении - на последней картинке - скрыть иконку "влево", иначе отобразить
};

arrowIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    let firstImageWidth = firstImage.clientWidth + 14; // получение ширины первого изображения и добавление значения поля в 14 пикселей
    carousel.scrollLeft +=
      icon.id == 'left' ? -firstImageWidth : firstImageWidth; // если клик по иконке "влево" - прокрутить карусель влево на ширину первой картинки, иначе - вправо
    setTimeout(() => showHideIcons(), 60);
    console.log(carousel.scrollLeft);
  });
});

const autoSlide = () => {
  // если изображений для прокрутки не осталось, прекратить выполнение функции
  if (carousel.scrollLeft == carousel.scrollWidth - carousel.clientWidth)
    return;

  positionDiff = Math.abs(positionDiff); // преобразование отрицательного числа в положительное - разницы координаты X мыши между моментом начала перемещения/клика и текущим положением - количество пикселей, на которое перемешена мышь; так же для касания
  let firstImageWidth = firstImage.clientWidth + 14; // получение ширины первого изображения и добавление значения поля в 14 пикселей
  let valDifference = firstImageWidth - positionDiff; // значение (разница значений), которое нужно применить к карусели слева, чтобы изображение заняло центр
  if (carousel.scrollLeft > prevScrollLeft) {
    return (carousel.scrollLeft +=
      positionDiff > firstImageWidth / 3 ? valDifference : -valDifference); // если пользователь прокручивает карусель вправо
  }
  return (carousel.scrollLeft -=
    positionDiff > firstImageWidth / 3 ? valDifference : -valDifference); // если пользователь прокручивает карусель влево
};

const dragStart = (e) => {
  // обновление значения глобальных переменных при нажатии кнопки мыши
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX; // координата X мыши в момент начала перемещения/клика мыши - mousedown // так же для касания
  prevScrollLeft = carousel.scrollLeft; // количество пикселей, на которое уже перемещена карусель
};

const dragging = (e) => {
  // прокрутка изображений/карусели влево по указателю мыши
  e.preventDefault();
  if (!isDragStart) return;
  isDragging = true;
  carousel.classList.add('dragging');
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX; // разница координаты X мыши между моментом начала перемещения/клика и текущим положением - количество пикселей, на которое перемешена мышь; так же для касания
  carousel.scrollLeft = prevScrollLeft - positionDiff; // разница между начальным количеством пикселей, на которое уже перемещена карусель, и количеством пикселей, на которое перемещается мышь
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove('dragging');

  if (!isDragging) return;
  isDragging = false;

  autoSlide();
};

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart);

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('touchmove', dragging);

carousel.addEventListener('mouseup', dragStop);
carousel.addEventListener('mouseleave', dragStop);
carousel.addEventListener('touchend', dragStop);
