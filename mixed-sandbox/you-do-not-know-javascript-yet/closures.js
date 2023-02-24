/* Функция scheduleMeeting(...) должна получать время начала встречи
(строка «чч:мм» в 24-часовом формате) и ее продолжительность (в минутах).
Функция должна вернуть true , если встреча приходится полностью на рабочий
день (в соответствии с временем, заданным в dayStart и dayEnd );
если встреча выходит за рамки рабочего дня, возвращается false . */

const dayStart = '07:30';
const dayEnd = '17:45';

function getNumber(string) {
  [hours, mins] = string.split(':').map(parseFloat);
  const fullSeconds = hours * 3600 + mins * 60;
  return fullSeconds;
}

function scheduleMeeting(startTime, durationMinutes) {
  const fullSecondsDayStart = getNumber(dayStart);
  const fullSecondsDayEnd = getNumber(dayEnd);
  const fullSecondsStartTime = getNumber(startTime);
  const fullDurationTime = Number(durationMinutes * 60);

  // console.log('fullSecondsDayStart:', fullSecondsDayStart);
  // console.log('fullSecondsDayEnd:', fullSecondsDayEnd);
  // console.log('fullSecondsStartTime:', fullSecondsStartTime);
  // console.log('fullSecondsStartTime:', fullDurationTime);

  if (
    fullSecondsStartTime == fullSecondsDayStart ||
    fullSecondsStartTime + fullDurationTime == fullSecondsDayEnd
  )
    return true;
    
  if (
    fullSecondsStartTime < fullSecondsDayStart ||
    fullSecondsStartTime > fullSecondsDayEnd ||
    fullSecondsStartTime + fullDurationTime > fullSecondsDayEnd
  )
    return false;

  return true;
}

console.log(scheduleMeeting('7:00', 15)); // false
console.log(scheduleMeeting('7:15', 30)); // false
console.log(scheduleMeeting('7:30', 30)); // true
console.log(scheduleMeeting('11:30', 60)); // true
console.log(scheduleMeeting('17:00', 45)); // true
console.log(scheduleMeeting('17:30', 30)); // false
console.log(scheduleMeeting('18:00', 15)); // false
