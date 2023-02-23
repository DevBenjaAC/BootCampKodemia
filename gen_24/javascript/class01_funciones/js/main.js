// Declarar funcion de forma habitual
const isEven = (numberToEval) => {
    return numberToEval % 2 === 0 ? true : false
}

// Declarar funcion de forma corta
const isEven2 = numberToEval => numberToEval % 2 === 0

// GUARDA funcion en una variable let 
let result = isEven(10);
let result2 = isEven2(59);

// imprime en consola y ejecuta la funcion guardada en la variable
console.log(result);
console.log(result2);

let person = {
    name: 'Benjamin',
    gretting: () => console.log(`Hola soy Benjamin`)
}


// 1.- Crear una funcion que reciba un nombre y nos entregue un nuevo string con la letra inicial y la letra final de ese nombre
//     input => Israel
//     output => Il
//    2.- crear una función que me devuelva el resultado de la suma de 2 números
//    3.- crear una función que me devuelva el resultado de la resta de 2 números
//    4.- crear una función que me devuelva el resultado de la multiplicación de 2 números
//    5.- crear una función que me devuelva el resultado de la división de 2 números
//    6.- Crear una fución que reciba el nombre de alguna operación aritmética, y 2 números, debe devolver el resultado de la operación aritmética indicada, entre los dos números recibidos
//    input => 'suma', 2, 3
//    output => 5
//    input => 'resta', 8, 2
//    output => 6

// / First exercise

const getFirstAndLastLetter = (name) => name.charAt(0) + name.charAt(name.length - 1)

let firstResult = getFirstAndLastLetter("Israel")
let secondResult = getFirstAndLastLetter("Benjamín")
console.log(firstResult)
console.log(secondResult)

//Second exercise

const sum = (numberOne, numberTwo) => numberOne + numberTwo

let firstSum = sum(25, 79)
console.log(firstSum)

//Three exercise

const rest = (numberOne, numberTwo) => numberOne - numberTwo

let firstRest = rest(25, 79)
console.log(firstRest)

//Four exercise

const multiplication = (numberOne, numberTwo) => numberOne * numberTwo

let firstMultiplication = multiplication(10, 2)
console.log(firstMultiplication)

//Five exercise

const division = (numberOne, numberTwo) => numberOne / numberTwo

let firstDivision = division(100, 4)
console.log(firstDivision)

//Six exercise

const calculator = (operation, number1, number2) => {
    let result
    switch (operation) {
        case "suma":
            result = sum(number1, number2)
            break
        case "resta":
            result = rest(number1, number2)
            break
        case "multiplicacion":
            result = multiplication(number1, number2)
            break
        case "division":
            result = division(number1, number2)
            break
        default:
            console.log("La operación no existe, por favor reintenta...")
            break
    }
    return result
}

let firstResultCalculator = calculator("suma", 10, 5)
console.log(firstResultCalculator)