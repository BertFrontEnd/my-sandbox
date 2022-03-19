/* let day = new Date().getDay(); */
let day = 5;
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const setCurrentDay = () => {
  const domDay = document.querySelector('.day');
  domDay.textContent = `${days[day]}`;
  console.log('current: ', day);
};

const setForecastDay = () => {
  const domFirstDay = document.querySelector('.first-day');
  const domSecondDay = document.querySelector('.second-day');
  const domThirdDay = document.querySelector('.third-day');

  let forecastDayFirst = day + 1;
  if (forecastDayFirst > 6) {
    forecastDayFirst = 0;
  } else {
    forecastDayFirst;
  }

  let forecastDaySecond = day + 2;
  if (forecastDaySecond > 6) {
    forecastDaySecond = 1;
  } else {
    forecastDaySecond;
  }

  let forecastDayThird = day + 3;
  if (forecastDayThird > 6) {
    forecastDayThird = 2;
  } else {
    forecastDayThird;
  }

  domFirstDay.textContent = `${days[forecastDayFirst]}`;
  console.log(forecastDayFirst);
  domSecondDay.textContent = `${days[forecastDaySecond]}`;
  console.log(forecastDaySecond);
  domThirdDay.textContent = `${days[forecastDayThird]}`;
  console.log(forecastDayThird);
};

const setCurrentDate = () => {
  const domDate = document.querySelector('.date-num');
  let date = new Date().getDate();

  domDate.textContent = `${date}`;
};

const setCurrentMonth = () => {
  const domMonth = document.querySelector('.date-str');
  let month = new Date().getMonth();

  switch (month) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'November';
      break;
    default:
      throw new Error('Something went wrong!');
  }

  domMonth.textContent = `${month}`;
};

let setCurrentYear = () => {
  const domYear = document.querySelector('.year');
  let year = new Date().getFullYear();

  domYear.textContent = `${year}`;
};

export {
  setCurrentDay,
  setForecastDay,
  setCurrentDate,
  setCurrentMonth,
  setCurrentYear,
};
