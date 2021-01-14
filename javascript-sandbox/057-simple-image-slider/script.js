const allImg = document.querySelectorAll('img');

const toSlide = (e) => {
  let num = e.target.dataset.number;
  let img = document.getElementById('slider');
  img.src = `./assets/img/img${num}_large.jpg`;
};

allImg.forEach((img) => {
  img.addEventListener('click', toSlide);
});
