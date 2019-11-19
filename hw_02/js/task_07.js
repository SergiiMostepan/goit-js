'use strict';

const allLogins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//     if (login.length >= 4 && login.length <= 16) {
//         return true;
//     } else {
//         return false;
//     }
// };
const isLoginValid = login => login.length >= 4 && login.length <= 16;

const isLoginUnique = (allLogins, login) => !allLogins.includes(login);

let login;

const addLogin = function (allLogins, login) {
    login = prompt('vedi login');
    if (!isLoginValid(login)) {
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
        // break;
    } else if (!isLoginUnique(allLogins, login)) {
        console.log('Такой логин уже используется!');
        // break;
    } else {
        allLogins.push(login);
        console.log('Логин успешно добавлен!');
    }
};

// Вызовы функции для проверки
addLogin(allLogins, login); // 'Логин успешно добавлен!'
// addLogin(allLogins, 'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(allLogins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(allLogins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(allLogins);