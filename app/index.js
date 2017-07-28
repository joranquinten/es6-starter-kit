// Importing of a module
import { calculator as calc } from './module.calculator';

console.log( calc.add(4, 10, 2) );

console.log( calc.exp(2, 10) );

// Class example
import { Vehicle, Car, Chopper } from './class.vehicle.js'; 

// Describe a type of car and interact with the class
let ford = new Car('Ford', 160, 'Mustang');
ford.move();

// Describe a type of chopper and interact with the class
let heli = new Chopper('Apache', 220);
heli.move();
setTimeout(() => heli.leave(), 2000);