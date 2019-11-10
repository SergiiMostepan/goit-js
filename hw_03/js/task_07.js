'use strict';
console.log('task 7 ___________________________________________________')
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};
let id = 0;


const account = {
    balance: 0,

    transactions: [],

    deposit(amount) {
        this.balance += amount;
        let newDeposit = {
            id: this.idCounter(),
            type: Transaction.DEPOSIT,
            amount,
        };
        this.addTransaction(newDeposit);
    },

    withdraw(amount) {
        if (this.balance < amount) {
            console.log('Not enought money on your account');
        } else {
            this.balance -= amount;
            let newWithdraw = {
                id: this.idCounter(),
                type: Transaction.WITHDRAW,
                amount,
            };
            this.addTransaction(newWithdraw);
        }
    },

    addTransaction(transaction) {
        this.transactions.push(transaction);
    },

    getBalance() {
        console.log(`On your account are - ${this.balance} UAH`);
    },


    getTransactionDetails(id) {
        for (let i = 0; i < this.transactions.length; i += 1) {
            if (this.transactions[i].id === id) {
                console.log(`Selected transaction with ID - ${id}`);
                console.table(this.transactions[i]);
            }
        };
    },

    getTransactionTotal(type) {
        let totalSumOfType = 0;
        for (let i = 0; i < this.transactions.length; i += 1) {
            if (this.transactions[i].type === type) {
                totalSumOfType += this.transactions[i].amount;
            }

        }
        if (type === 'deposit') {
            console.log(` You deposit in to account - ${totalSumOfType}`);
        } else {
            console.log(` You withdraw in to account - ${totalSumOfType}`);
        }
    },
    idCounter() {
        id += 1;
        return id;
    },
};

console.log(account.deposit(50));
console.log(account.deposit(35));
console.log(account.withdraw(10));
console.log(account.withdraw(17));
console.log(account.withdraw(100));
console.log(account.deposit(378));
console.log(account.getBalance());
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
console.log('account details');
console.log(account.transactions);