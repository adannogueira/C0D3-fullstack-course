// Escreva uma função chamada lessThan que retorna uma função
/*
const youngerThanCardiB = lessThan(27)
let miley = youngerThanCardiB(26) // true, because 26 is smaller than 27
let nicki = youngerThanCardiB(36) // false, because 36 is not smaller than 27

const smallerThan = lessThan(2)
let b = smallerThan(3) // b is false, because 3 is not smaller than 2
b = smallerThan(5) || youngerThanCardiB(5)  // smallerThan(5) is false (falsey)
// so b takes the value true because youngerThanCardiB(5) returns true
*/
const lessThan = age => age2 => age2 < age

const youngerThanCardiB = lessThan(27)
let miley = youngerThanCardiB(26)
console.log(miley)
let nicki = youngerThanCardiB(36)
console.log(nicki)

const smallerThan = lessThan(2)
let b = smallerThan(3)
console.log(b)
b = smallerThan(5) || youngerThanCardiB(5)
console.log(b)