import { concatInvert } from "./Ej01.js";

let textoEntrada01 = "Escuela";

let textoEntrada02 = "ORT";

const textoSalida = concatInvert(textoEntrada01, textoEntrada02);

console.clear();

console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);

console.log(`Texto de Salida: "${textoSalida}"`);

import { PI, sumar, restar, multiplicar, dividir } from './matematica.js';

console.log('El valor de PI es:', PI);

console.log('La suma de 5 y 3 es:', sumar(5, 3));
console.log('La resta de 10 y 4 es:', restar(10, 4));
console.log('El producto de 6 y 2 es:', multiplicar(6, 2));
console.log('La división de 8 entre 2 es:', dividir(8, 2));

import Alumno from './alumno.js';

const alumno1 = new Alumno('Thiago', '46876761');
const alumno2 = new Alumno('Santino', '47031761');

alumno1.mostrar();
alumno2.mostrar();

import { copiar } from './Ej04.js';
//copiar('./entrada.txt', './salida.txt');

import {PizzaServices} from './PizzaServices.js';
console.log(await PizzaServices.getById(3));
