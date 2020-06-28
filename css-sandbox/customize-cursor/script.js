let cursor = document.querySelector('.cursor');

function filterOfCursor(e) {
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
}

window.addEventListener('mousemove', filterOfCursor);
