'use strict';

let total = 0;
const promptText = `Введите число`;
let input;

do {
    input = prompt(promptText);
    if (isFinite(input) !== true) {
        alert('Шо ты написал дядь? нужно число');
    } else {
        total += +input;
    };
} while (input !== null)
if (input === null) {
    alert(`Общая сумма чисел равна = ${total}`);
}