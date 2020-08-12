document.addEventListener('click', (e) => {
  let body = document.querySelector('body');
  let bullet = document.createElement('span');
  let x = e.offsetX;
  let y = e.offsetY;
  bullet.style.left = x + 'px';
  bullet.style.top = y + 'px';
  body.append(bullet);

  let audio = document.getElementById('audio');
  audio.play();
});
