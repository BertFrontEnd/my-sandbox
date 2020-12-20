let countDate = new Date('Jan 1, 2021 00:00:00').getTime();

const newYear = () => {
  let now = new Date().getTime();
  gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let d = Math.floor(gap / day);

  let h = Math.floor((gap % day) / hour) < 10 ? `0${Math.floor((gap % day) / hour)}` : Math.floor((gap % day) / hour);

  let m = Math.floor((gap % hour) / minute) < 10 ? `0${Math.floor((gap % hour) / minute) < 10}` : Math.floor((gap % hour) / minute);

  let s = Math.floor((gap % minute) / second) < 10 ? `0${Math.floor((gap % minute) / second)}` : Math.floor((gap % minute) / second);

  document.getElementById('day').innerHTML = d;
  document.getElementById('hour').innerHTML = h;
  document.getElementById('minute').innerHTML = m;
  document.getElementById('second').innerHTML = s;
};

setInterval(() => {
  newYear();
}, 1000);
