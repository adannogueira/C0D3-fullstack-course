// Escreva uma função 'runIt' que recebe uma função como argumento e retorna a função
/*
const subtract = runIt((a, b) => {
  return a - b
})
let b = subtract(3, 20) // b is -17
b = subtract(11, 2) // b is 9 
*/
const runIt = func => func

const subtract = runIt((a, b) => {
    return a - b
})
let b = subtract(3, 20) // b is -17
console.log(b)
b = subtract(11, 2) // b is 9 
console.log(b)