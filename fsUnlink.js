const fs = require("fs");

fs.unlink
("/Users/karlaherzo/Desktop/BACKEND/borrar.txt",
(err) => {
    if (err) {
        console.log("no se puede borrar archivo");
    }
    console.log("Archivo borrado correctamente");
});


