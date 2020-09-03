let video = document.querySelector('video');

window.addEventListener('scroll', () => {
  let value = 1 + window.scrollY / -800;
  console.log(window.scrollY / -800);
  video.style.opacity = value;
});
