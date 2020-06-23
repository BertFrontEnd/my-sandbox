const Button = document.querySelectorAll('a');

Button.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let Ripple = document.createElement('span');
    Ripple.style.left = x + 'px';
    Ripple.style.top = y + 'px';
    this.appendChild(Ripple);

    setTimeout(() => {
      Ripple.remove();
    }, 1000);
  });
});
