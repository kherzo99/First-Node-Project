const fs = require("fs");

fs.appendFile(
    "/Users/karlaherzo/Desktop/BACKEND/Mi-primer-proyecto-de-node/test.txt",
    "HOLA, ESTO ES UN TEST",
    (err) => {
        if (err) {
            console.log("No se puede hacer append a este archivo");
        }
        console.log("Se hizo el append correctamente");
    });

