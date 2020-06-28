document.addEventListener('DOMContentLoaded', () => {
  setInterval(function () {
    let Hours = document.querySelector('#Hours');
    let Minutes = document.querySelector('#Minutes');
    let Seconds = document.querySelector('#Seconds');

    let h =
      new Date().getHours() < 10
        ? '0' + new Date().getHours()
        : new Date().getHours();
    let m =
      new Date().getMinutes() < 10
        ? '0' + new Date().getMinutes()
        : new Date().getMinutes();
    let s =
      new Date().getSeconds() < 10
        ? '0' + new Date().getSeconds()
        : new Date().getSeconds();

    Hours.textContent = h;
    Minutes.textContent = m;
    Seconds.textContent = s;
  }, 1000);
});

/* function clock() {
  let Hours = document.querySelector('#Hours');
  let Minutes = document.querySelector('#Minutes');
  let Seconds = document.querySelector('#Seconds');

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  Hours.textContent = h;
  Minutes.textContent = m;
  Seconds.textContent = s;
}

let interval = setInterval(clock, 1000); */
