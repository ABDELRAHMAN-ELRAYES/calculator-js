'use strict';

let themeBack = document.querySelector('.in-theme-btn');
let screen = document.querySelector('.screen');
let delBtn = document.querySelector('.btn-del');
let acBtn = document.querySelector('.btn-ac');
let enterBtn = document.querySelector('.btn-enter');
let ansBtn = document.querySelector('.btn-ans');

themeBack.addEventListener('click', () => {
  themeBack.classList.toggle('right-theme');
});
let btns = document.querySelectorAll('.btn');
let btnPressed = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  'minus',
  'plus',
  'divide',
  'multiply',
  '.',
];
let expression = '';
let ans = '';
btns.forEach(btn => {
  btn.addEventListener('click', event => {
    const classList = event.target.classList;
    btnPressed.forEach(c => {
      if (`btn-${c}` === classList[1]) {
        if (typeof c === typeof 1) {
          screen.textContent += c;
          expression += c;
        } else if (`btn-${c}` === `btn-plus`) {
          screen.textContent += '+';
          expression += '+';
        } else if (`btn-${c}` === `btn-minus`) {
          screen.textContent += '-';
          expression += '-';
        } else if (`btn-${c}` === `btn-divide`) {
          screen.textContent += '÷';
          expression += '/';
        } else if (`btn-${c}` === `btn-multiply`) {
          screen.textContent += '×';
          expression += '*';
        } else if (`btn-${c}` === `btn-.`) {
          screen.textContent += '.';
          expression += '.';
        }
      }
    });
  });
});
delBtn.addEventListener('click', () => {
  screen.textContent = screen.textContent.substring(
    0,
    screen.textContent.length - 1
  );
  expression = screen.textContent;
});
acBtn.addEventListener('click', () => {
  screen.textContent = '';
  expression = '';
});

enterBtn.addEventListener('click', () => {
  screen.textContent = eval(expression);
  ans = eval(expression);
  expression = screen.textContent;
});

ansBtn.addEventListener('click', () => {
  screen.textContent += ans;
  expression += ans;
});
