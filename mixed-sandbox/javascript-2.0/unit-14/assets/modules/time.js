export const setTime = () => {
  const time = document.querySelector('.time');

  setInterval(() => {
    const date = new Date();
    const setCurrentTime = date.toLocaleTimeString();
    time.textContent = `${setCurrentTime}`;
  }, 1);
};
