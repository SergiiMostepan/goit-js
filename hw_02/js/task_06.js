'use strict';

let total = 0;
const promptText = `Введите число`;
let input;
let arr = [];

do {
    input = prompt(promptText);
    if (isNaN(input) === true) {
        alert('Шо ты написал дядь? нужно число');
    } else {
        arr.push(input);
    }
} while (input !== null);

arr.pop();
for (let i of arr) {
    total += Number(i);
}
console.log(arr);
console.log(`Общая сумма чисел равна ${total}`);