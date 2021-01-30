const express = require('express')
const app = express()
const hbs = require('hbs');



//middleware
app.use(express.static(__dirname + '/public'));
//esto se ejecutará siempre

//Express hbs engine

hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

//mandar los helpers al archivo para tenerlos separados
//require('./hbs/helpers.js);

const port = process.env.PORT || 3000;

//helpers hbs
//como uso el helper? poniendo su nombre dentro del archivo hbs {{getAnio}}
//como funciona? en su invocacion verificará si existe primero en el apartado de render, sino lo encuentra alli
//buscará en los helpers, en caso de no encontrar nada devolverá undefined
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    //palabras ahora es un arreglo con todas sus palabras separadas, cada una un indice.


    //recorremos cada elemento del array, es decir cada palabra
    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');

})

app.get('/', function(req, res) {

    //res.send('Hola mundo')

    //renderiza el home.hbs creado en views/home.hbs
    res.render('home', {
        nombre: 'Alfredo',
        //anio: new Date().getFullYear(), //reemplazado por el helper
    });
})



app.get('/about', function(req, res) {
    res.render('about', {
        //anio: new Date().getFullYear() //reemplazado por el helper
    });
})

//callback agregado por nosotros
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})