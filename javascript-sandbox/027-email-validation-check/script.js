const email = document.getElementById('email');
let form = document.getElementById('form');
let text = document.getElementById('text');

email.addEventListener('input', function () {
  let val = email.value;
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (val.match(pattern)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
    text.innerHTML = 'Your Email Address in Valid';
    text.style.color = '#00ff00';
  } else if (val === '') {
    form.classList.remove('valid');
    form.classList.remove('invalid');
    text.innerHTML = '';
    text.style.color = '';
  } else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    text.innerHTML = 'Please, Enter Valid Email';
    text.style.color = '#ff0000';
  }
});
