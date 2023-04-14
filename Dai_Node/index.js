const fs = require ('fs')

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
console.log("Ultima? linea")