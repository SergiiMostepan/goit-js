'use strict';
const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', inputName);

function inputName() {
    inputText.value ? outputText.textContent = inputText.value : outputText.textContent = 'незнакомец';
}