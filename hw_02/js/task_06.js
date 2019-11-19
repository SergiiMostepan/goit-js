'use strict';

let total = 0;
const promptText = `Введите число`;
let input;
let arr = [];

while (input !== null) {
    input = prompt(promptText);
    if (isNaN(input)) {
        alert('Необходимо ввести только числа');
    } else if (!input) {
        continue;
    } else {
        arr.push(+input);
    }
};

for (let i of arr) {
    total += i;
}
console.log(arr);
console.log(`Общая сумма чисел равна ${total}`);