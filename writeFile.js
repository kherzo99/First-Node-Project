
const fs = require("fs");

fs.writeFile("test3.txt", 
"Hola, esto es un test3",
"utf8",(err) => {
    if (err) {
        return err
    }
    console.log("El archivo se guardo");
});



