// operador spread caso 4

const originalObject = {
    nombre:"John",
    edad: 33,
};

const newObject = { ... originalObject };

// console.log(newObject);

originalObject.nombre = "Anna";

console.log(originalObject);
console.log(newObject);