const fs = require("fs")

/* Se copia el contenido. Se sobreescribe cada que se 
realiza el node copyFile.js 
*/

fs.copyFile ("./hola.txt",
"./holis2.txt",
(err) => {
    if (err) {
        console.log("No se puede hacer copy de este archivo");
    }
    else {
        console.log("Se realizo copy correctamente");
}}); 
