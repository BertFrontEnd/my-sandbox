const next = document.querySelector('#btn-next');
const prev = document.querySelector('#btn-prev');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = (n) => {
  for (let slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
};

const activeDot = (n) => {
  for (let dot of dots) {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
};

const prepareCurrentSlide = (i) => {
  activeSlide(i);
  activeDot(i);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

setInterval(nextSlide, 2500);
