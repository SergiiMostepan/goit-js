'use strict';
const incrementButton = document.querySelector('button[data-action="increment"]').addEventListener('click', increment);
const decrementButton = document.querySelector('button[data-action="decrement"]').addEventListener('click', decrement);
const interfaceCounter = document.querySelector('#value');
let counterValue = 0;

function increment() {
    counterValue += 1;
    interfaceCounter.textContent = counterValue;
};

function decrement() {
    counterValue -= 1;
    interfaceCounter.textContent = counterValue;
};