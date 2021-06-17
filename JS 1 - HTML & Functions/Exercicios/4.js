// Escreva uma função 'callWith' que recebe um número e retorna uma função.
// A função retornada recebe uma função e a invoca com o número passado como parâmetro.
/*
const fun = callWith(10)
let b = fun((num) => {
  return num + 5
}) // b is 15

b = fun((num) => {
  return num + "hello"
}) // b is "10hello"

b = fun((num) => {
  return 500 % num
}) // b is 0
*/
const callWith = num => func => func(num)

const fun = callWith(10)
let b = fun((num) => {
    return num + 5
})
console.log(b)
b = fun((num) => {
    return num + "hello"
})
console.log(b)
  b = fun((num) => {
    return 500 % num
})
console.log(b)
