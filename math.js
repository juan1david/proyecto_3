// math.js

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    if (b !== 0) {
        return a / b;
    } else {
        throw new Error("Cannot divide by zero.");
    }
};

module.exports = {
    getRandomInt: getRandomInt,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};
