'use strict';
const inputText = document.querySelector('#validation-input');

inputText.addEventListener('change', inputValidator);

function inputValidator() {
    if (inputText.value.length != inputText.dataset.length) {
        inputText.classList.add('invalid');
    } else if (inputText.classList.contains('invalid')) {
        inputText.classList.remove('invalid');
    }
    inputText.classList.add('valid');
};