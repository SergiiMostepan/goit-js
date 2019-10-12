'use strict';
let message;
const chinaCost = 100;
const chiliCost = 250;
const australiaCost = 170;
const indiaCost = 80;
const JamaicaCost = 120;

const china = `китай`;
const chili = `чили`;
const australia = `австралия`;
const india = `индия`;
const Jamaica = `ямайка`;

const promptText = `В какую страну отправить плюшек?`
let countryOfDistination = prompt(promptText);
countryOfDistination = countryOfDistination.toLowerCase();

switch (countryOfDistination) {
    case china:
        message = `Доставка в ${china} будет стоить ${chinaCost} кредитов`;
        break;
    case chili:
        message = `Доставка в ${chili} будет стоить ${chiliCost} кредитов`;
        break;
    case australia:
        message = `Доставка в ${australia} будет стоить ${australiaCost} кредитов`;
        break;
    case india:
        message = `Доставка в ${india} будет стоить ${indiaCost} кредитов`;
        break;
    case Jamaica:
        message = `Доставка в ${Jamaica} будет стоить ${JamaicaCost} кредитов`;
        break;
    default:
        message = `Ничего не выбрано`;
}
alert(message);