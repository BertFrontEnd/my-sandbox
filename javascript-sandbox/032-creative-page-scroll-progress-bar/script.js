let progress = document.getElementById('progress-bar');
console.log(progress);
let totalHeight = document.body.scrollHeight - window.innerHeight;
console.log(totalHeight);

window.addEventListener('scroll', () => {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  console.log(progressHeight);
  progress.style.height = progressHeight + '%';
});
