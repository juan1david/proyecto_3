// Paquete importado
require('colors');

// Referencia al módulo math a través de la constante math
const math = require("./math.js");

const main = async () => {
    console.clear();
    let a = math.getRandomInt(10);
    let b = math.getRandomInt(10);

    console.log('***************************************'.blue);
    console.log('* '.blue, 'funciones matematicas'.bgBlue, '*'.blue);
    console.log('***************************************\n'.blue);
    console.log('***************************************'.red);
    console.log('  numeros aleatorios:', a, b);
    console.log('*******************************************\n'.blue);

    console.log('*******************************************'.blue);
    console.log('**'.blue + '                                 ' + '      **'.blue);
    console.log('**'.blue + ' add:' + math.add(a, b) + '  ' +'                               **'.blue);
    console.log('**'.blue + ' substract:' + math.subtract(a, b) + ' ' + '                         **'.blue);
    console.log('**'.blue + ' multiply:' + math.multiply(a, b) + '  ' + '                          **'.blue);
    console.log('**'.blue + ' divide:' + math.divide(a, b) + '  ' + '                         **'.blue);
    console.log('*******************************************\n'.blue);
};

main();
