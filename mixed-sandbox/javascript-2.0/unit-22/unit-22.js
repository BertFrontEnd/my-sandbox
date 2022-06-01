//  Task 1
// Добавьте в код функции try catch так, чтобы вместо ошибки выводилось в out-1 цифра 1.

function t1() {
  try {
    let a = 22;
    let c = a + d;
  } catch (err) {
    console.log(err);
    document.querySelector('.out-1').innerHTML = '1';
  }
  console.log('done');
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Добавьте в код функции try catch так, чтобы вместо ошибки был вывод результата в out-2.

function t2() {
  try {
    let a = 4;
    let b = 5;
    document.querySelector('.out-2222222').innerHTML = a * b;
  } catch (err) {
    document.querySelector('.out-2').innerHTML = err;
  }
}

document.querySelector('.b-2').onclick = t2;

//  Task 3
// Добавьте в код функции try catch так, чтобы вместо ошибки был вывод результата в out-3. Если его нет - создавайте в коде.
// т.е. вы не знаете будет или нет он в html.

function t3() {
  try {
    let a = 4;
    let b = 5;
    document.querySelector('.out-3').innerHTML = a * b;
  } catch (err) {
    let button = document.querySelector('.b-3');
    let out3 = document.createElement('div');
    out3.classList.add('out-3');
    out3.textContent = err;
    button.after(out3);
  }
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Дана переменная a. В переменную делается push. Используя try catch отловите ошибки если они есть. Если ошибка вывести в out-4 число 0. Если не ошибка - то результирующий массив через пробел.

let a = [2, 3, 4];
// a = 5;

function t4() {
  try {
    a.push(7);
    for (let el of a) {
      document.querySelector('.out-4').textContent += `${el} `;
    }
  } catch (err) {
    document.querySelector('.out-4').textContent = '0';
  }
}

document.querySelector('.b-4').onclick = t4;

//  Task 5
// Добавьте try, catch, finally так, чтобы в out-5 выводился 0 при ошибке. А в out-5-1 всегда выводилось слово 'finally';

function t5() {
  let p = document.querySelectorAll('p');
  /* p = [0, 2, 5]; */

  try {
    p.push(3);
    document.querySelector('.out-5').textContent = p;
  } catch (err) {
    document.querySelector('.out-5').textContent = '0';
  } finally {
    document.querySelector('.out-5-1').textContent = `finally`;
  }
}

document.querySelector('.b-5').onclick = t5;
