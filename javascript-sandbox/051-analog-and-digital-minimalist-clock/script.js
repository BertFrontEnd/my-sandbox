const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const timeAmPm = document.querySelector('#am-pm');

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let time = 'AM';

  if (h > 12) {
    h = h - 12;
    time = 'PM';
  }

  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  hours.innerHTML = `${h}:`;
  minutes.innerHTML = `${m}:`;
  seconds.innerHTML = `${s}&nbsp;`;
  timeAmPm.innerHTML = time;
});
