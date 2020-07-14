const docStyle = document.documentElement.style;
const aElement = document.querySelector('a');
const boundingClientRect = aElement.getBoundingClientRect();
console.log(boundingClientRect);

aElement.addEventListener('mousemove', (e) => {
  const x = e.clientX - boundingClientRect.left;
  /* console.log('x:', x); */
  const y = e.clientY - boundingClientRect.top;
  /* console.log('y:', y); */

  const xc = boundingClientRect.width / 2;
  /* console.log('xc:', xc); */
  const yc = boundingClientRect.height / 2;
  /* console.log('yc:', yc); */

  const dx = x - xc;
  console.log('dx:', dx);
  const dy = y - yc;
  console.log('dy:', dy);

  docStyle.setProperty('--rx', `${dy / -1}deg`);
  docStyle.setProperty('--ry', `${dx / 10}deg`);
});

aElement.addEventListener('mouseleave', (e) => {
  docStyle.setProperty('--ty', '0');
  docStyle.setProperty('--rx', '0');
  docStyle.setProperty('--ry', '0');
});

aElement.addEventListener('mousedown', (e) => {
  docStyle.setProperty('--tz', '-25px');
});

aElement.addEventListener('mouseup', (e) => {
  docStyle.setProperty('--tz', '-12px');
});
