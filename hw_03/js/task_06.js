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
const calculateTotalPrice = (products, key) => {
    let price;
    for (const product of products) {
        const keys = Object.values(product);
        for (const ke of keys) {
            if (product.name === key) {
                price = product.price * product.quantity;
            }
        };

    };
    return price;
};


console.log(calculateTotalPrice(products, 'Радар'));

console.log(calculateTotalPrice(products, 'Дроид'));
console.log(calculateTotalPrice(products, 'Захват'));