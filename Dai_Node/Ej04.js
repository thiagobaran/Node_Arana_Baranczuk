const fs = require('fs');

function copiar(archivoOrigen, archivoDestino) {
  fs.readFile(archivoOrigen, 'utf-8', (error, datos) => {
    if (error) {
      console.error('Error al leer el archivo:', error);
      return;
    }

    fs.writeFile(archivoDestino, datos, 'utf-8', (error) => {
      if (error) {
        console.error('Error al escribir el archivo:', error);
        return;
      }

      console.log(`El archivo ${archivoOrigen} fue copiado exitosamente como ${archivoDestino}`);
    });
  });
}