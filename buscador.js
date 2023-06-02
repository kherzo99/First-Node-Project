
/* Pasarle un nombre a nuestro proceso de node y verificar si ese nombre existe
en el arreglo de nombres 
Si existe imprimir bienvenido "nombre" y el nombre sino imprimir "Fuera de aquí"

Tiene que estar dentro de una función 

*/

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



const nombre = process.argv[2];
console.log(nombre);

 const findName = (nombre) => {
    const existe = nombres.includes(nombre)
    console.log("existe", existe);
    if (existe) { //Cuando solo pones if y la variable asume que es verdadero para decirle que sea falso es con un "!"
        console.log("Bienvenido");
        return
    }
    console.log("Fuera de aquí");
 }

 findName(nombre)

 


// Maneras de resolver el ejercicio: 
//Find -si encuentra elvalor te lo trae 
//Filter - trae arreglo con los filtrados 
// Includes - regresa un boolean si lo encuentra ( true or false)










