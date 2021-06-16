const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const sideBar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');

let activeSlideIndex = 0;

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;

const changeSlide = (direction) => {
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
};

// Click
upButton.addEventListener('click', () => {
  changeSlide('up');
});

downButton.addEventListener('click', () => {
  changeSlide('down');
});

// Mouse Over
upButton.addEventListener('mouseover', () => {
  upButton.style.color = '#222';
});

downButton.addEventListener('mouseover', () => {
  downButton.style.color = '#222';
});

// Mouse Out
upButton.addEventListener('mouseout', () => {
  upButton.style.color = '#aaa';
});

downButton.addEventListener('mouseout', () => {
  downButton.style.color = '#aaa';
});

// Key
let flag = false;

window.addEventListener('keydown', (e) => {
  if (flag) {
    return;
  } else {
    flag = true;
  }

  if (e.code === 'ArrowUp') {
    changeSlide('up');
    upButton.style.color = '#222';
  }

  if (e.code === 'ArrowDown') {
    changeSlide('down');
    downButton.style.color = '#222';
  }
});

window.addEventListener('keyup', (e) => {
  flag = false;
  upButton.style.color = '#aaa';
  downButton.style.color = '#aaa';
});
