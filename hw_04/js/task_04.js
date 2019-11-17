'use strict';
console.log('task 4 ___________________________________________________')

function countTotalSalary(obj) {
    const keys = Object.keys(obj);
    let sum = 0;

    for (const key of keys) {
        sum += obj[key];
    };
    return sum;
};

console.log(countTotalSalary({})); // 0

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
); // 330

console.log(
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    }),
); // 400