
//console.log("Mi primer proyecto con Node");

//const argv = require('yargs-parser')(process.argv.slice(2))
// console.log(argv)

//const nombre= argv.nombre 
//const apellido = argv.apellido

//console.log(`Nombre : ${nombre} , Apellido: ${apellido}`);

// bienvenido arcoirirs // Fuera de aqui en rojo. 

const nombres = [
    "Andres",
    "Andres de Anda",
    "Christian",
    "Damian",
    "Dani",
    "Diego",
    "Dan",
    "Gustavo",
    "Ignacio",
    "Jorge",
    "Karla",
    "Lau",
    "Luis",
    "Mara",
    "Max",
    "Pao",
    "Roberto",
    "Samantha" 
]


// const test = require('yargs-parser')
// const nombre = process.argv[2];
// console.log(nombre);

const nombre = require('yargs-parser')(process.argv.slice([2]));
console.log(nombre);
var colors = require('colors');


 const findName = (nombre) => {
    const existe = nombres.includes(nombre)
  console.log("existe", existe);
    if (existe === "true") { //Cuando solo pones if y la 
        //variable asume que es verdadero para decirle que sea falso es con un "!"
        console.log("Bienvenido".bgRed);
    }
    else {
        console.log("Fuera de aquí".rainbow);
    }
   
 }

 (findName(nombres));

 // findName(nombre)

