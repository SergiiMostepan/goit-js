'use strict';
console.log('_______task_05___________________________________________________')
class Car {
    constructor({
        speed = 0,
        price = 18000,
        maxSpeed = 220,
        isOn = false,
        distance = 0
    }) {
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }

    static getSpecs(car) {
        console.log(`Max speed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price ${car._price}`);
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
    turnOn() {
        this.isOn = true;
    }
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }

    accelerate(value) {
        let currentSpeed = this.speed + value;
        return currentSpeed <= this.maxSpeed ? this.speed = currentSpeed : this.speed = this.maxSpeed;
    }
    decelerate(value) {
        let currentSpeed = this.speed - value;
        return currentSpeed > 0 ? this.speed = currentSpeed : this.speed = 0;
    }

    drive(hours) {
        if (this.isOn) {
            return this.distance += this.speed * hours;
        }
    }

};


const mustang = new Car({
    maxSpeed: 200,
    price: 2000
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff(); //fall speed to null
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000