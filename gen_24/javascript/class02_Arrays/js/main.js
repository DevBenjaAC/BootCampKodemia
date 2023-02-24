// Teams Exercise
let numbers = [34, 12, 3, 8, 76]
let names = ["Israel", "Charles", "David"]
let text = "La mejor forma de predecir el futuro es creándolo"

let fullNames = [
    ["Israel", "Salinas"],
    ["Charles", "Silva"],
    ["David", "Moranchel"],
    ["Naomi", "López"],
    ["Rose", "Ortega"]
]

//1.- Crear una función que reciba un array de números y devuelva la suma total de todos los números del array
// Con for 
function sumaTotal(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
let resultado = sumaTotal(numbers);
console.log(resultado); // output: 133



// 2.- Crear una función que reciba un array de strings y devuelva un nuevo array con los strings ordenados alfabéticamente
let ordenAlfabetico = (arraydeestrings) => {
    return arraydeestrings.sort();
}
let resultadoAlfabetico = ordenAlfabetico(names);
console.log(resultadoAlfabetico);


//     3.- Crear una función que reciba un array de strings y devuelva un nuevo array con los strings invertidos
let arraysInvertidos = (arraydeestrings) => {
    return arraydeestrings.reverse();
}
let resultadoInvertidos = arraysInvertidos(names);
console.log(resultadoInvertidos);

//     4.- Crear una función que reciba un string y me devuelva la cantidad de palabras que existen en ese string
let cantidadPalabras = (string) => {
    return string.split(" ").length;
}
let resultadoPalabras = cantidadPalabras(text);
console.log(resultadoPalabras);

//     5.- Crear una función que reciba una matriz de nombres y apellidos, y me devuelva un nuevo array con las iniciales de esos nombres
//     input:
//     [
//         ["Israel", "Salinas"],
//         ["Charles", "Silva"],
//         ["David", "Moranchel"],
//         ["Naomi", "López"],
//         ["Rose", "Ortega"]
//     ]
//     output:
//     [
//         "I.S.",
//         "C.S.",
//         "D.M.",
//         "N.L.",
//         "R.O."
//     ]
let arraysIniciales = (matriz) => {
    let iniciales = [];
    for (let i = 0; i < matriz.length; i++) {
        let fullNames = matriz[i];
        let name = fullNames.split(" ")[0];
        let inicialname = name.charAt(0).toUpperCase()
        iniciales.push(inicialname)

    }
    return iniciales;
}
let resultadoLetrasIniciales = arraysIniciales(matriz);