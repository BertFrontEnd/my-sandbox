export function currentDate() {
  let d = new Date().getDay();

  switch (d) {
    case 0:
      d = 'Sunday';
      break;
    case 1:
      d = 'Monday';
      break;
    case 2:
      d = 'Tuesday';
      break;
    case 3:
      d = 'Wednesday';
      break;
    case 4:
      d = 'Thursday';
      break;
    case 5:
      d = 'Friday';
      break;
    case 6:
      d = 'Saturday';
      break;

    default:
      throw new Error('Something went wrong!');
  }

  const dn = new Date().getDate();

  let ds = new Date().getMonth();

  switch (ds) {
    case 0:
      ds = 'January';
      break;
    case 1:
      ds = 'February';
      break;
    case 2:
      ds = 'March';
      break;
    case 3:
      ds = 'April';
      break;
    case 4:
      ds = 'May';
      break;
    case 5:
      ds = 'June';
      break;
    case 6:
      ds = 'July';
      break;
    case 7:
      ds = 'August';
      break;
    case 8:
      ds = 'September';
      break;
    case 9:
      ds = 'October';
      break;
    case 10:
      ds = 'November';
      break;
    case 11:
      ds = 'November';
      break;

    default:
      throw new Error('Something went wrong!');
  }

  const y = new Date().getFullYear();

  const h =
    new Date().getHours() < 10
      ? `0${new Date().getHours()}`
      : new Date().getHours();

  const m =
    new Date().getMinutes() < 10
      ? `0${new Date().getMinutes()}`
      : new Date().getMinutes();

  const s =
    new Date().getSeconds() < 10
      ? `0${new Date().getSeconds()}`
      : new Date().getSeconds();

  const obj = {
    day: d,
    dateNum: dn,
    dateStr: ds,
    year: y,
    hour: h,
    minute: m,
    second: s,
  };

  return obj;
}

export function forecastDate() {
  let fd = new Date().getDay();

  switch (fd + 1) {
    case 0:
      fd = 'Sunday';
      break;
    case 1:
      fd = 'Monday';
      break;
    case 2:
      fd = 'Tuesday';
      break;
    case 3:
      fd = 'Wednesday';
      break;
    case 4:
      fd = 'Thursday';
      break;
    case 5:
      fd = 'Friday';
      break;
    case 6:
      fd = 'Saturday';
      break;

    default:
      throw new Error('Something went wrong!');
  }

  let sd = new Date().getDay();

  switch (sd + 2) {
    case 0:
      sd = 'Sunday';
      break;
    case 1:
      sd = 'Monday';
      break;
    case 2:
      sd = 'Tuesday';
      break;
    case 3:
      sd = 'Wednesday';
      break;
    case 4:
      sd = 'Thursday';
      break;
    case 5:
      sd = 'Friday';
      break;
    case 6:
      sd = 'Saturday';
      break;

    default:
      throw new Error('Something went wrong!');
  }

  let thd = new Date().getDay();

  switch (thd) {
    case 0:
      thd = 'Sunday';
      break;
    case 1:
      thd = 'Monday';
      break;
    case 2:
      thd = 'Tuesday';
      break;
    case 3:
      thd = 'Wednesday';
      break;
    case 4:
      thd = 'Thursday';
      break;
    case 5:
      thd = 'Friday';
      break;
    case 6:
      thd = 'Saturday';
      break;

    default:
      throw new Error('Something went wrong!');
  }

  const obj = {
    firstDay: fd,
    secondDay: sd,
    thirdDay: thd,
  };

  return obj;
}
