// El spreed operator se escribe con 3 puntos
const array1 = [1, 2, 3]
const array2 = [...array1, 4, 5, 6]

console.log(array2)

// ----------------------------

const arrayOriginal = [1, 2, 3]
const copiaArray = [...arrayOriginal]

copiaArray.push(4)

console.log(arrayOriginal)
console.log(copiaArray)
console.log(copiaArray === arrayOriginal)

// ----------------------------

const array3 = [1, 2, 3]
const array4 = [4, 5, 6]

const arrayCombinado = [...array3, ...array4]

console.log(arrayCombinado)

// ----------------------------

const numbers = [1, 2, 3, 4]

function sum(a,b,c,d){
    return a + b + c + d
}

const result = sum (...numbers)

console.log(result)