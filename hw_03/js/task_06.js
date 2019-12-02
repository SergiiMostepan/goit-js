'use strict';
console.log('task 6 ___________________________________________________')
const products = [{
        name: 'Радар',
        price: 1300,
        quantity: 4
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Дроид',
        price: 400,
        quantity: 7
    },
    {
        name: 'Захват',
        price: 1200,
        quantity: 2
    },
];
const calculateTotalPrice = (arr, key) => {
    let price;

    for (let i = 0; i < arr.length; i += 1) {
        if (key === arr[i].name) {
            price += arr[i].price * arr[i].quantity;
        }

    };
    return price;
}


console.log(calculateTotalPrice(products, 'Радар'));

console.log(calculateTotalPrice(products, 'Дроид'));
console.log(calculateTotalPrice(products, 'Захват'));