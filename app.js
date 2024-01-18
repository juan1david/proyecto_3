// Paquete importado para dar formato de colores a la consola.
require('colors');

// Referencia al módulo math a través de la constante math.
const math = require("./math.js");

// Función principal del programa.
const main = async () => {
    // Limpia la consola.
    console.clear();

    // Genera dos números enteros aleatorios entre 0 y 10.
    let a = math.getRandomInt(10);
    let b = math.getRandomInt(10);

    // Imprime un encabezado con formato de colores en la consola.
    console.log('***************************************'.blue);
    console.log('* '.blue, 'funciones matematicas'.bgBlue, '*'.blue);
    console.log('***************************************\n'.blue);

    // Imprime un encabezado adicional con formato de colores y muestra los números aleatorios generados.
    console.log('***************************************'.red);
    console.log('  numeros aleatorios:', a, b);
    console.log('*******************************************\n'.blue);

    // Imprime los resultados de las operaciones matemáticas con formato de colores.
    console.log('*******************************************'.blue);
    console.log('**'.blue + '                                 ' + '      **'.blue);
    console.log('**'.blue + ' add:' + math.add(a, b) + '  ' +'                               **'.blue);
    console.log('**'.blue + ' substract:' + math.subtract(a, b) + ' ' + '                         **'.blue);
    console.log('**'.blue + ' multiply:' + math.multiply(a, b) + '  ' + '                          **'.blue);
    console.log('**'.blue + ' divide:' + math.divide(a, b) + '  ' + '                         **'.blue);
    console.log('*******************************************\n'.blue);
};

// Llama a la función principal para iniciar el programa.
main();
