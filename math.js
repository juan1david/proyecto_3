// math.js

// Función que devuelve un número entero aleatorio hasta el valor máximo especificado.
const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

// Función que suma dos números.
const add = (a, b) => {
    return a + b;
};

// Función que resta el segundo número del primero.
const subtract = (a, b) => {
    return a - b;
};

// Función que multiplica dos números.
const multiply = (a, b) => {
    return a * b;
};

// Función que divide el primer número por el segundo. Lanza un error si el divisor es cero.
const divide = (a, b) => {
    if (b !== 0) {
        return a / b;
    } else {
        throw new Error("Cannot divide by zero.");
    }
};

// Exporta un objeto que contiene todas las funciones definidas en el módulo.
module.exports = {
    getRandomInt: getRandomInt,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};
