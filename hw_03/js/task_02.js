// 'use strict';
// console.log('task 2 ___________________________________________________')

// function countProps(obj) {
//     const keys = Object.keys(obj);
//     let sum = 0;

//     for (const key of keys) {
//         sum += 1;
//     };
//     return sum;
// };
// console.log(countProps({}));

// console.log(countProps({
//     name: 'Mango',
//     age: 2
// }));

// console.log(countProps({
//     mail: 'poly@mail.com',
//     isOnline: true,
//     score: 500
// }));

// or_________________________________________________________

function countPropsV(obj) {
    return Object.keys(obj).length;
};

console.log(countPropsV({}));

console.log(countPropsV({
    name: 'Mango',
    age: 2,
    assass: 2213
}));

console.log(countPropsV({
    mail: 'poly@mail.com',
    isOnline: true,
    score: 500,
    ewqwq: 21e1
}));