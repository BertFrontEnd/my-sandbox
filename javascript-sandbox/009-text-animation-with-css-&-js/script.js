let h1 = document.querySelector('h1');
console.log(h1);
let letters = h1.innerText.split('');
console.log(letters);

let html = '';

letters.forEach((letter) => {
  let classes = '';
  if (letter != ' ') {
    classes = 'letter js-letter';
  }
  html = html + `<span class='${classes}'>${letter}</span>`;
});

h1.innerHTML = html;

console.log(html.h1);

const jsLetters = document.querySelectorAll('.js-letter');
jsLetters.forEach((node) => {
  node.addEventListener('mouseover', function () {
    this.classList.add('active');
  });
  node.addEventListener('mouseout', function () {
    this.classList.remove('active');
  });
});
