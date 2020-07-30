const toggle = document.getElementById('toggle');
console.log(toggle);
const password = document.getElementById('password');
console.log(password);

function showHide() {
  if (password.type === 'password') {
    password.setAttribute('type', 'text');
    toggle.classList.add('hide');
  } else {
    password.setAttribute('type', 'password');
    toggle.classList.remove('hide');
  }
}

toggle.addEventListener('click', showHide);
