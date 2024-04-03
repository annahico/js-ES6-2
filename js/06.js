//operador rest

function promedio(...numeros) {

    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma / numeros.length;
}

console.log(promedio(2, 4, 6, 10));