const pastel = {
    leerReceta: false,
    conseguirIngredientes: false,
    masaPreparada: false,
    hornearElPastel : false,
    decorarElPastel : false
};

const leerReceta = (pastel) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastel.leerReceta = true;
            if (!pastel.leerReceta) {
                // No se resuelve -> CATCH recibe esto
                reject("Tienes que leer la receta primero");
            }

            // Si si se resuelve -> THEN recibe esto
            resolve(pastel);
        }, 1000);
    });
};

// Declarar
const conseguirIngredientes = (pastelLeido) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastelLeido.conseguirIngredientes = true;
            if (!pastelLeido.conseguirIngredientes) {
                reject("No conseguimos los ingredientes del paste;");
            }

            resolve(pastelLeido);
        }, 1000);
    });
};

const prepararMasa = (pastelConIngredientes) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastelConIngredientes.masaPreparada = true;
            if (!pastelConIngredientes.masaPreparada) {
                reject("No se preparo la masa");
            }

            resolve(pastelConIngredientes);
        }, 1000);
    });
};

const hornearElPastel = (pastelConMasaPreparada) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            pastelConMasaPreparada.hornearElPastel = true;
            if (!pastelConMasaPreparada.hornearElPastel) {
                reject ("No se horneo el pastel");
            }
            resolve  (pastelConMasaPreparada)
        }, 1000);
    });
};

const decorarElPastel = (pastelYaHorneado) => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            pastelYaHorneado.decorarElPastel = true;
            if (!pastelYaHorneado.decorarElPastel) {
                reject ("No se decoro el pastel");
            }
            resolve (pastelYaHorneado)
        }, 1000); 
    });
};



/*
 function convencional - async va al principio.
*/

const terminarPastel = async (pastel) => {
    try {
        const pastelConRecetaLeida = await leerReceta(pastel);
        const pastelConIngredientesConseguidos = await conseguirIngredientes(pastelConRecetaLeida);
        const pastelConMasaPreparada = await prepararMasa(pastelConIngredientesConseguidos);
        const pastelYaHorneado = await hornearElPastel(pastelConMasaPreparada);
        const pastelYaDecorado = await decorarElPastel(pastelYaHorneado);
        return await pastelYaDecorado;
      } catch (err) {
        console.log("Error", err);
      }
    }
   
    const resultado = terminarPastel(pastel)
    .then((pastel) => {
      console.log("pastel terminado", pastel)
    }); 

    