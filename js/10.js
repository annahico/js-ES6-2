//for in

const usuario = { nombre: "Maria", edad: 40, ciudad: "Barcelona"};

// for (const propiedad in usuario) {
//     console.log(propiedad + " " + usuario[propiedad]);
//     }

for (const clave in usuario) {
    console.log(clave + "--->" + usuario[clave]);
}