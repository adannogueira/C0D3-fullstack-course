// Escreva uma função chamada hello3x que retorna uma função.
// A função retornadadeve retornar "hello" das primeiras 3 vezes que for executada,
// depois, deve retornar "".

/**
 * Exemplo
 * const threeF = hello3x()
 * let b = threeF() // b is "hello"
 * b = threeF()     // b is "hello"
 * b = threeF()     // b is "hello"
 * b = threeF()     // b is ""
 * // b will always be "" for all subsequent b = threeF() executions
 */
const hello3x = () => {
    let counter = 3
    return () => {
        if (counter > 0) {
            counter--
            return 'hello'
        }
        return ''
    }
}
const a = hello3x()
let b = a()
console.log(b)
b = a()
console.log(b)
b = a()
console.log(b)
b = a()
console.log(b)
b = a()
console.log(b)
