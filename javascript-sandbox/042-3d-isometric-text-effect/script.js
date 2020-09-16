const text = document.getElementById('text');
let shadow = '';
for (var i = 0; i < 30; i++) {
  shadow += (shadow ? ',' : '') + -i * 1 + 'px ' + i * 1 + 'px #d9d9d9';
}
text.style.textShadow = shadow;
