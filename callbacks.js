
// function irACasa(callback) {
//     console.log("Caminando hacia casa...");
//     callback();
// }

// function avisar () {
//     console.log("Ya llegue a la casa ama");
// }

// irACasa(avisar);

// Callback básicamente es para poder llamar otra función 
// dentro de la función. 

let quieroUn = (callback) => {
console.log("quiero un...");
callback();
}

let loQueSea = () => {
    console.log("helado");
}

quieroUn(loQueSea)