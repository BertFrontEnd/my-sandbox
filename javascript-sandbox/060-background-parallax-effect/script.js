document.addEventListener('mousemove', function (e) {
  this.querySelectorAll('.layer').forEach((layer) => {
    let speed = layer.getAttribute('data-speed');
    let x = (window.innerWidth - e.pageX * speed) / 100;
    let y = (window.innerHeight - e.pageY * speed) / 100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});
