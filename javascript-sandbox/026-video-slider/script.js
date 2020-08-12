const thumb1 = document.getElementById('thumb1');
const thumb2 = document.getElementById('thumb2');
const thumb3 = document.getElementById('thumb3');
const thumb4 = document.getElementById('thumb4');

/* function videoUrl(link) {
  document.getElementById('slider').src = link;
} */

thumb1.addEventListener('click', function () {
  let el = document.getElementById('slider');
  el.src = './assets/video/video-01.mp4';
  console.log(el);
});

thumb2.addEventListener('click', function () {
  let el = document.getElementById('slider');
  el.src = './assets/video/video-02.mp4';
  console.log(el);
});

thumb3.addEventListener('click', function () {
  let el = document.getElementById('slider');
  el.src = './assets/video/video-03.mp4';
  console.log(el);
});

thumb4.addEventListener('click', function () {
  let el = document.getElementById('slider');
  el.src = './assets/video/video-04.mp4';
  console.log(el);
});
