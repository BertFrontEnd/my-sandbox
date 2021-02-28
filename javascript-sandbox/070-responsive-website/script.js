const menu = document.querySelector('.toggle-menu');
const navigation = document.querySelector('.navigation');

const toggleMenu = () => {
  menu.classList.toggle('active');
  navigation.classList.toggle('active');
};

menu.addEventListener('click', toggleMenu);
