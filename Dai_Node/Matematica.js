
const PI = 3.14159265359;

const sumar = (a, b) => {
  return a + b;
}

const restar = function(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error('No se puede dividir por cero.');
  }
  return a / b;
}

export { PI, sumar, restar, multiplicar, dividir };