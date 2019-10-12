'use strict';

let message;
const credits = 23580;
const pricePerDroid = 3000;
const promptText = `Шо купляем и сколько?`;
let amauntOfDroids = prompt(promptText);
amauntOfDroids = Number.parseInt(amauntOfDroids);
let costOfDroids = amauntOfDroids * pricePerDroid;
let change = credits - costOfDroids;

if (amauntOfDroids === null) {
    message = `Отменено пользователем!`;
} else if (costOfDroids <= credits) {
    message = `Вы купили ${amauntOfDroids} дроидов, на счету осталось ${change} кредитов.`;
} else {
    message = `Недостаточно средств на счету!`;
}

alert(message);