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


refs.startBtnRef.addEventListener('click', onStartBtnClick);
refs.stopBtnRef.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {}

function onStopBtnClick() {}