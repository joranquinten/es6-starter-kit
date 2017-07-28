 class Vehicle {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    move() {
        console.log(`${this.name} is moving with a speed of ${this.speed}!`);
    } 
};

class Car extends Vehicle {
    constructor(name, speed, type) {
        super(name, speed);
        this.className = 'car';  
        this.type = type || 'type unknown';
        this.wheels = 4;
    }

    move() {
        console.log(`The ${this.className} ${this.name} ${this.type} is moving on ${this.wheels} wheels with a speed of ${this.speed}!`);
    }
};

class Chopper extends Vehicle {
    constructor(name, speed, type) {
        super(name, speed);
        this.type = 'chopper';
        this.pilot = 'Arnie';
    }

    move() {
        console.log(`${this.pilot} the pilot, says: "Get in the ${this.type}"!`);
    }

    leave() {
        console.log(`${this.pilot} has left with the ${this.name}.`);
    }
}

export {Vehicle, Car, Chopper};