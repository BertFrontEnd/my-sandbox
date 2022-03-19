let day = new Date().getDay();
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

  const forecastDay = (day) => {
    return day > 6 ? day - 7 : day;
  };

  let forecastDayFirst = forecastDay(day + 1);
  let forecastDaySecond = forecastDay(day + 2);
  let forecastDayThird = forecastDay(day + 3);

  domFirstDay.textContent = `${days[forecastDayFirst]}`;
  domSecondDay.textContent = `${days[forecastDaySecond]}`;
  domThirdDay.textContent = `${days[forecastDayThird]}`;
};

const setCurrentDate = () => {
  const domDate = document.querySelector('.date-num');
  let date = new Date().getDate();

  domDate.textContent = `${date}`;
};

const setCurrentMonth = () => {
  const domMonth = document.querySelector('.date-str');
  let month = new Date().getMonth();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  domMonth.textContent = `${months[month]}`;
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
