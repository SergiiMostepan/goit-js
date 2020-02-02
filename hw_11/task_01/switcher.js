'use strict';


const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    buttonStart: document.querySelector('button[data-action="start"]'),
    buttonStop: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body')
}

let randomNumber;

const randomIntegerFromInterval = (min, max) => {
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
};

let currentColor;
let isActive = false;
const changeColor = function () {
    randomIntegerFromInterval(0, colors.length - 1)
    currentColor = colors[randomNumber];
    refs.body.style.backgroundColor = currentColor;
}

let timerId = null;

refs.buttonStart.addEventListener('click', () => {
    if (isActive) {
        return
    }
    isActive = true
    timerId = setInterval(changeColor, 1000);
});

refs.buttonStop.addEventListener('click', () => {
    isActive = false
    clearInterval(timerId)
});