const carousel = document.querySelector('.carousel');
const firstImage = carousel.querySelectorAll('img')[0];
const arrowIcons = document.querySelectorAll('.wrapper i');

let isDragStart = false;
let prevPageX, prevScrollLeft;
let firstImageWidth = firstImage.clientWidth + 14; // получение ширины первого изображения и добавление значения поля в 14 пикселей
let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // получение максимальной ширины прокрутки - разность всей ширины карусели и видимой части карусели

const showHideIcons = () => {
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'block'; // если карусель находится в крайнем левом положении - на первой картинке - скрыть иконку "влево", иначе отобразить
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? 'none' : 'block'; // если карусель находится в крайнем правом положении - на последней картинке - скрыть иконку "влево", иначе отобразить
};

arrowIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    carousel.scrollLeft +=
      icon.id == 'left' ? -firstImageWidth : firstImageWidth; // если клик по иконке "влево" - прокрутить карусель влево на ширину первой картинки, иначе - вправо
    setTimeout(() => showHideIcons(), 60);
    console.log(carousel.scrollLeft);
  });
});

const dragStart = (e) => {
  // обновление значения глобальных переменных при нажатии кнопки мыши
  isDragStart = true;
  prevPageX = e.pageX; // координата X мыши в момент начала перемещения/клика мыши - mousedown
  prevScrollLeft = carousel.scrollLeft; // количество пикселей, на которое уже перемещена карусель
};

const dragging = (e) => {
  // прокрутка изображений/карусели влево по указателю мыши
  e.preventDefault();
  if (!isDragStart) return;
  carousel.classList.add('dragging');
  let positionDiff = e.pageX - prevPageX; // разница координаты X мыши между моментом начала перемещения/клика и текущим положением - количество пикселей, на которое перемешена мышь
  carousel.scrollLeft = prevScrollLeft - positionDiff; // разница между начальным количеством пикселей, на которое уже перемещена карусель, и количеством пикселей, на которое перемещается мышь
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove('dragging');
};

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);
