function initComparisons() {
  /* найти все элементы с классом "overlay" */
  let overlay = document.getElementsByClassName('img-comp-overlay');

  for (let i = 0; i < overlay.length; i++) {
    /* поиск "overlay" элемента */
    /* передать элемент "overlay" в качестве параметра при выполнении функции compareImages */
    compareImages(overlay[i]);
  }

  /* Функция сравнения изображений */
  function compareImages(imgComparisons) {
    let clicked = false;

    /* получить ширину и высоту элемента imgComparisons */
    let w = imgComparisons.offsetWidth;
    let h = imgComparisons.offsetHeight;

    /* установить ширину элемента imgComparisons на 50% */
    imgComparisons.style.width = w / 2 + 'px';

    /* создать слайдер/ползунок */
    let slider = document.createElement('div');
    slider.setAttribute('class', 'img-comp-slider');

    /* вставить слайдер/ползунок */
    imgComparisons.parentElement.insertBefore(slider, imgComparisons);

    /* поместить слайдер/ползунок посередине */
    slider.style.top = h / 2 - slider.offsetHeight / 2 + 'px';
    slider.style.left = w / 2 - slider.offsetWidth / 2 + 'px';

    /* выполнять функцию при нажатии кнопки мыши */
    slider.addEventListener('mousedown', slideReady);

    /* выполнять функцию при отпускании кнопки мыши */
    window.addEventListener('mouseup', slideFinish);

    /* выполнять функцию при касании пальцем (для сенсорных экранов) */
    slider.addEventListener('touchstart', slideReady);

    /*выполнять функцию при отпускании пальца (для сенсорных экранов)*/
    window.addEventListener('touchstop', slideFinish);

    /* Функция начала сравнения изображений */
    function slideReady(e) {
      /* предотвратить любые другие действия, которые могут произойти при перемещении по изображению */
      e.preventDefault();

      /* слайдер/ползунок теперь нажат и готов к перемещению: */
      clicked = true;

      /* выполнять функцию при перемещении слайдера/ползунка */
      window.addEventListener('mousemove', slideMove);
      window.addEventListener('touchmove', slideMove);
    }

    /* Функция завершения сравнения изображений */
    function slideFinish() {
      /* слайдер/ползунок больше не нажимается: */
      clicked = false;
    }

    /* Функция перемещения слайдера/ползунка */
    function slideMove(e) {
      /* если слайдер/ползунок больше не нажимается, выйти из этой функции */
      if (!clicked) return;

      /* получить позицию курсора по "X" */
      let pos = getCursorPos(e);

      /* предотвратить выход слайдера/ползунка за пределы изображения */
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;

      /* выполнить функцию, которая изменит размер наложенного изображения в соответствии с курсором */
      slide(pos);
    }

    /* Функция получения координаты "X" положения курсора мышки */
    function getCursorPos(e) {
      e = e || window.event;

      /* получить данные элемента imgComparisons */
      let targetCoords = imgComparisons.getBoundingClientRect();

      /* вычислить координату "X" курсора относительно изображения */
      let xCoords = e.pageX - targetCoords.left;

      /* учесть любую прокрутку страницы */
      xCoords = xCoords - window.pageXOffset;
      return xCoords;
    }

    /* Функция изменения ширины изображения и перемещения слайдера/ползунка */
    function slide(xPosition) {
      /* изменить ширину изображения: */
      imgComparisons.style.width = xPosition + 'px';

      /* переместить слайдер/ползунок */
      slider.style.left =
        imgComparisons.offsetWidth - slider.offsetWidth / 2 + 'px';
    }
  }
}

initComparisons();
