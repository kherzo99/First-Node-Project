const fs = require("fs");

fs.readFile("/Users/karlaherzo/Desktop/BACKEND/Mi-primer-proyecto-de-node/hola.txt", 
"utf8", (err, data) => {
    //Dentro de la callback 

    //si hay error 
    if (err) {
        console.log(err);
        return;
        }
        // Si leyo bien, dame la data
        console.log("Data:" + " " + data);
    });

    

