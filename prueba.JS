//fat arrow function
const capitalizarTexto = (texto) => {
    let arregloString = texto.split('');
    //return arregloString.join(' ');
    return arregloString.length;
};

//console.log(capitalizarTexto('Hola a todos yo soy el leon'));

//const arreglo = ['pepe quisiera saber de ti hoy'];
let cadena = 'pepe quisiera saber  de ti hoy';
const nuevoArreglo = cadena.split('  ');
console.log(nuevoArreglo);