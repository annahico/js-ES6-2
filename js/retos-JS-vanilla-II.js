// Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
// Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá los
// valores necesarios para calcular el área. Para ello has de crear un método por cada figura
// para calcular cada área, este devolverá un número real. Muestra el resultado por consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado

const prompt = require("prompt-sync")();

// definicion de funciones
const areaCirculo = (radio) => radio ** 2 * Math.PI;

const areaTriangulo = (base, altura) => (base * altura) / 2;

const areaCuadrado = (lado) => lado ** 2;

// definicion de variables
let opcionFigura; //  1, 2, 3
let area;

// mostrar mensaje
console.log("Seleccione la figura");
console.log("1 - circulo");
console.log("2 - triangulo");
console.log("3 - cuadrado");

// entrar datos
opcionFigura = +prompt("Diga su opcion: ");

// verificacion de la opcion seleccionada por el usuario
switch (opcionFigura) {
    case 1: // circulo
        // entrada de datos para el radio del circulo
        let radio = Number(prompt("Entre el radio del circulo: "));
        area = areaCirculo(radio);
        break;

    case 2: // triangulo
        // entrada de datos para la base y la altura del triangulo
        let base = +prompt("Entre la base del triangulo: ");
        let altura = +prompt("Entre la altura del triangulo: ");
        area = areaTriangulo(base, altura);
        break;

    case 3: // cuadrado
        // entrada de datos para el lado del cuadrado
        let lado = +prompt("Entre el lado del cuadrado: ");
        area = areaCuadrado(lado);
        break;

    default:
        console.log("Opcion no valida");
        break;
}

// mostrar resultado
if (area != undefined) {
    console.log(`El area de la figura ${opcionFigura} es:`);
    console.log(area);
}