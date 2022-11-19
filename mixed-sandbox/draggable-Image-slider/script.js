const carousel = document.querySelector('.carousel');

let isDragStart = false;
let prevPageX, prevScrollLeft;

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
  let positionDiff = e.pageX - prevPageX; // разница координаты X мыши между моментом начала перемещения/клика и текущим положением - количество пикселей, на которое перемешена мышь
  carousel.scrollLeft = prevScrollLeft - positionDiff; // разница между начальным количеством пикселей, на которое уже перемещена карусель, и количеством пикселей, на которое перемещается мышь
  console.log('prevScrollLeft:', prevScrollLeft);
  console.log('positionDiff:', positionDiff);
};

const dragStop = () => {
  isDragStart = false;
};

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);
