'use strict';

const inputScroll = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputScroll.addEventListener('input', fontSizeChanger);

function fontSizeChanger() {
    text.style.fontSize = `${inputScroll.value}px`;
}