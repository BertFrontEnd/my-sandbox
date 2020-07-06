let bg = document.getElementById('container');
let count = 20;
for (let i = 0; i < count; i++) {
  let glitchBox = document.createElement('div');
  glitchBox.className = 'box';
  bg.appendChild(glitchBox);
}

setInterval(function () {
  let glitch = document.getElementsByClassName('box');
  for (let i = 0; i < glitch.length; i++) {
    glitch[i].style.left = Math.floor(Math.random() * 100) + 'vw';
    glitch[i].style.top = Math.floor(Math.random() * 100) + 'vh';
    glitch[i].style.width = Math.floor(Math.random() * 400) + 'px';
    glitch[i].style.height = Math.floor(Math.random() * 100) + 'px';
    glitch[i].style.backgroundPosition = Math.floor(Math.random() * 50) + 'px';
  }
}, 200);
