class Alumno {
    constructor(username, dni) {
      this.username = username;
      this.dni = dni;
    }
  
    mostrar() {
      console.log(`Alumno: ${this.username} - DNI: ${this.dni}`);
    }
  }
  
  export default Alumno;