// Escreva uma função chamada helloFunction que retorna uma função
/*
const moreHello = helloFunction()
let b = moreHello() // b is "hello"
b = moreHello() // b is "hellohello"
b = moreHello() // b is "hellohellohello"
b = moreHello() // b is "hellohellohellohello"
// every time moreHello is called, one more "hello" will be appended to variable b.
*/
const helloFunction = () => {
    let res = ''
    return () => {
        res += 'hello'
        return res
    }
}
const moreHello = helloFunction()
let b = moreHello()
console.log(b)
b = moreHello()
console.log(b)
b = moreHello()
console.log(b)
b = moreHello()
console.log(b)
