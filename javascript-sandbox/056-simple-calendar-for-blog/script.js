const lang = navigator.language;

let date = new Date();
let monthName = date.toLocaleString(lang, { month: 'long' });
let dayName = date.toLocaleString(lang, { weekday: 'long' });
let dayNumber = date.getDate();
let year = date.getFullYear();

document.getElementById('month-name').innerHTML = monthName;
document.getElementById('day-name').innerHTML = dayName;
document.getElementById('day-number').innerHTML = dayNumber;
document.getElementById('year').innerHTML = year;
