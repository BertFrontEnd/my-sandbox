/* function toggle() {
  let curtain = document.querySelector('#curtain');
  curtain.classList.toggle('active');
  console.log(curtain);
} */

document.querySelector('.toggle').addEventListener('click', () => {
  let curtain = document.querySelector('#curtain');
  curtain.classList.toggle('active');
  console.log(curtain);
});
