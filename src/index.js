import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    startBtnRef: document.querySelector('[data-action="start"]'),
    stopBtnRef: document.querySelector('[data-action="stop"]')
};

let timerId = null;
refs.startBtnRef.addEventListener('click', onStartBtnClick);
refs.stopBtnRef.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  timerId = setInterval(() => {
    const randomColor = randomIntegerFromInterval(0, colors.length - 1)
    document.body.style.backgroundColor = colors[randomColor]
    refs.startBtnRef.disable = true
}, 1000)
}

function onStopBtnClick() {
  clearInterval(timerId)
  refs.startBtnRef.disable = false
 }

