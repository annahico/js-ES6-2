//destructing

const usuario = { nombre: "Maria", edad: 40, ciudad: "Barcelona" };

// let nombre = usuario.nombre;
// let edad = usuario.edad;
// let ciudad = usuario.ciudad;

const { nombre, edad, ciudad } = usuario;

console.log(nombre);
console.log(edad);
console.log(ciudad);