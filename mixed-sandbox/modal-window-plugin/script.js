const slidesPlugin = (activeSlide = 0) => {
  const slides = document.querySelectorAll('.slide');

  slides[activeSlide].classList.add('active');

  const removeActiveClasses = () => {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  };

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      removeActiveClasses();
      slide.classList.add('active');
    });
  }
};

slidesPlugin(4);
