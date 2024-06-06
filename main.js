'use strict';

const BACKGROUND = '#1a2c47';
const OPERATIONCOLOR = '#61738e';
const ENTERBTN = '#bacbd8';
const OVERLAY = '#0e1e38e0';

let themeBack = document.querySelector('.in-theme-btn');
let screen = document.querySelector('.screen');
let delBtn = document.querySelector('.btn-del');
let acBtn = document.querySelector('.btn-ac');
let enterBtn = document.querySelector('.btn-enter');
let ansBtn = document.querySelector('.btn-ans');
let btns = document.querySelectorAll('.btn');

let darkOverlay = document.querySelector('.container');
let darkBtnBackground = document.querySelector('.btns');
let headerBackground = document.querySelector('.header');
let opsBtnBackground = document.querySelectorAll('.btn-ops');
function changeOperationBtnNew() {
  opsBtnBackground.forEach(e => {
    e.style.backgroundColor = OPERATIONCOLOR;
  });
}
function changeBtnFontColorNew() {
  btns.forEach(e => {
    if (e.classList.contains('btn-co')) e.style.color = BACKGROUND;
  });
}
function changeOperationBtnOld() {
  opsBtnBackground.forEach(e => {
    e.style.backgroundColor = '#00b7bd';
  });
}
function changeBtnFontColorOld() {
  btns.forEach(e => {
    if (e.classList.contains('btn-co')) e.style.color = '#005866';
  });
}
themeBack.addEventListener('click', () => {
  // themeBack.classList.toggle('right-theme');
  if (!themeBack.classList.contains('right-theme')) {
    themeBack.classList.add('right-theme');
    enterBtn.style.backgroundColor = ENTERBTN;
    screen.style.backgroundColor = BACKGROUND;
    darkBtnBackground.style.backgroundColor = BACKGROUND;
    themeBack.style.backgroundColor = BACKGROUND;
    darkOverlay.style.background = OVERLAY;
    headerBackground.style.color = BACKGROUND;
    changeOperationBtnNew();
    changeBtnFontColorNew();
  } else {
    themeBack.classList.remove('right-theme');
    enterBtn.style.backgroundColor = '#b8f5ee';
    screen.style.backgroundColor = '#005866';
    darkBtnBackground.style.backgroundColor = '#005866';
    themeBack.style.backgroundColor = '#005866';
    darkOverlay.style.background = '#8aeef0a6';
    headerBackground.style.color = '#005866';
    changeOperationBtnOld();
    changeBtnFontColorOld();
  }
});

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
