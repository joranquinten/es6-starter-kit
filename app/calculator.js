//
// Basic example of an exported module
//

export const calculator = {

    // Accepts a collection of values to add
    add: (...values) => { 
        let sum = 0; 
        values.forEach((product) => sum += product );
        return `Product: ${sum}`;
    },

    // Accepts a collection of values to subtract from each other
    subtract: (...values) => { 
        let sum = 0; 
        values.forEach((product) => sum -= product );
        return `Subtracted: ${sum}`;
    },

    // Accepts a collection of values to multiply
    multiply: (...values) => { 
        let sum = 1; 
        values.forEach((product) => sum = sum * product );
        return `Multiplied: ${sum}`;
    },

    // Accepts two values to divide by
    divide: (x, y) => `Division: ${x / y}`,

    // Accepts two values and returns exponent
    exp: (x, y) => `Exponent: ${Math.pow(x, y)}`,

};
