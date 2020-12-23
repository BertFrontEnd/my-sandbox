const arrow = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  let scroll = document.querySelector('.scroll-to-top');
  scroll.classList.toggle('active', window.scrollY > 500);
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

arrow.addEventListener('click', scrollToTop);
