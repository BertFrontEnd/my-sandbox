let iconBox = document.querySelectorAll('.icon-box');
let contentBox = document.querySelectorAll('.content-box');

for (let i = 0; i < iconBox.length; i++) {
  iconBox[i].addEventListener('mouseover', function () {
    for (let i = 0; i < contentBox.length; i++) {
      contentBox[i].className = 'content-box';
    }

    document.getElementById(this.dataset.id).className = 'content-box active';

    for (let i = 0; i < iconBox.length; i++) {
      iconBox[i].className = 'icon-box';
    }

    this.className = 'icon-box active';
  });
}
