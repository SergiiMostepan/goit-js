'use strict';
console.log('task 1 ___________________________________________________')
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user['mood'] = 'happy';
user['hobby'] = 'javaScript';
user['premium'] = false;

const keys = Object.keys(user);

for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
}