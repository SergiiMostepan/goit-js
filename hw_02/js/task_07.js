'use strict';

const allLogins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    if (login.length >= 4 && login.length <= 16) {
        return true;
    } else {
        return false;
    }
};


const isLoginUnique = function (allLogins, login) {

    if (allLogins.includes(login)) {
        return false;
    } else {
        return true;
    }
};



const addLogin = function (allLogins, login) {
    if (isLoginValid(login) === false) {
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
        // break;
    } else if (isLoginUnique(allLogins, login) === false) {
        console.log('Такой логин уже используется!');
        // break;
    } else {
        allLogins.push(login);
        console.log('Логин успешно добавлен!');
    }
    return allLogins;
};

// Вызовы функции для проверки
addLogin(allLogins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(allLogins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(allLogins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(allLogins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'