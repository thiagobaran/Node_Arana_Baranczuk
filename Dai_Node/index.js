import { concatInvert } from "./Ej01.js";

let textoEntrada01 = "Escuela";

let textoEntrada02 = "ORT";

const textoSalida = concatInvert(textoEntrada01, textoEntrada02);

console.clear();

console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);

console.log(`Texto de Salida: "${textoSalida}"`);



/*const fs = require ('fs')

fs.writeFile('./prueba1.txt','Linea1\nLinea 2\n', error =>{
    if (error) {
       console.log("Error",error)  
    }
    else
    {
        console.log("archivo creado")
    }
}

)
console.log("Ultima? linea")*/