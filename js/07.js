//extension de objetos literales (hay otra forma de crear objetos

let nombre = "John"
let edad = 30
let ciudad = "Barcelona"


// let user = {
//     nombre: nombre,
//     edad: edad,
//     ciudad: ciudad,
// };

let usuario = {
    nombre,
    edad,
    ciudad,
    saludar() {
        console.log("Hola, soy " + this.nombre);
    },
};


console.log(usuario);
usuario.saludar();