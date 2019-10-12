'use strict';
const promptText = `введите пароль`;
const ADMIN_PASSWORD = prompt(promptText);
let message;

if (ADMIN_PASSWORD === null) {
    message = `Отменено пользователем!`;
} else if (ADMIN_PASSWORD === 'jqueryismyjam') {
    message = `Добро пожаловать!`;
} else {
    message = `Доступ запрещен, неверный пароль!`;
}

alert(message);