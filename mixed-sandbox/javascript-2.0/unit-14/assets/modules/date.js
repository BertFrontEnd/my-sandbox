const setCurrentDay = () => {
  const domDay = document.querySelector('.day');
  let day = new Date().getDay();

  switch (day) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
    default:
      throw new Error('Something went wrong!');
  }

  domDay.textContent = `${day}`;
};

const setForecastDay = () => {
  const domFirstDay = document.querySelector('.first-day');
  let firstDay = new Date().getDay();

  const domSecondDay = document.querySelector('.second-day');
  let secondDay = new Date().getDay();

  const domThirdDay = document.querySelector('.third-day');
  let thirdDay = new Date().getDay();

  firstDay = firstDay + 1 > 6 ? 0 : firstDay + 1;

  switch (firstDay) {
    case 0:
      firstDay = 'Sunday';
      break;
    case 1:
      firstDay = 'Monday';
      break;
    case 2:
      firstDay = 'Tuesday';
      break;
    case 3:
      firstDay = 'Wednesday';
      break;
    case 4:
      firstDay = 'Thursday';
      break;
    case 5:
      firstDay = 'Friday';
      break;
    case 6:
      firstDay = 'Saturday';
      break;
    default:
      throw new Error('Something went wrong!');
  }

  secondDay = secondDay + 2 > 6 ? 0 : secondDay + 2;

  switch (secondDay) {
    case 0:
      secondDay = 'Sunday';
      break;
    case 1:
      secondDay = 'Monday';
      break;
    case 2:
      secondDay = 'Tuesday';
      break;
    case 3:
      secondDay = 'Wednesday';
      break;
    case 4:
      secondDay = 'Thursday';
      break;
    case 5:
      secondDay = 'Friday';
      break;
    case 6:
      secondDay = 'Saturday';
      break;
    default:
      throw new Error('Something went wrong!');
  }

  thirdDay = thirdDay + 3 > 6 ? 0 : thirdDay + 3;

  switch (thirdDay) {
    case 0:
      thirdDay = 'Sunday';
      break;
    case 1:
      thirdDay = 'Monday';
      break;
    case 2:
      thirdDay = 'Tuesday';
      break;
    case 3:
      thirdDay = 'Wednesday';
      break;
    case 4:
      thirdDay = 'Thursday';
      break;
    case 5:
      thirdDay = 'Friday';
      break;
    case 6:
      thirdDay = 'Saturday';
      break;
    default:
      throw new Error('Something went wrong!');
  }

  domFirstDay.textContent = `${firstDay}`;
  domSecondDay.textContent = `${secondDay}`;
  domThirdDay.textContent = `${thirdDay}`;
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
