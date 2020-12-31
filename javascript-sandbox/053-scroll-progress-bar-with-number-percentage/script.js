const progressBar = document.getElementById('progress-bar');
const percent = document.getElementById('percent');

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
  let progress = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.height = `${progress}%`;
  percent.innerHTML = `Page Scrolled ${Math.round(progress)}%`;
});
