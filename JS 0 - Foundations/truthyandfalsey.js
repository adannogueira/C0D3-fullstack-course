/*
 * Após ver true e false com os booleanos, saiba que todo tipo de
 * informação em JS é ou verdadeiro ou falso.
 * 
 * Falso: Existem 6 valores falsos em JS, veremos agora 3, os
 * outros virão com a experiência:
 * false
 * 0
 * "" (uma string vazia)
 * undefined
 * null
 * NaN (Not a Number)
 * 
 * Verdadeiro: TODO o resto é verdadeiro!
 * Para demonstrar, vamos ver os tipos que já aprendemos:
 * 
 * +-------+------+------------+
 * |Tipo   |Falso |Verdadeiro  |
 * |Number |0, NaN|Todo o resto|
 * |String |""    |Todo o resto|
 * |Boolean|false |true        |
 * +-------+------+------------+
 * 
 * E porque isso? Valores verdadeiros e falsos são requisitos dos
 * operadores !, || e &&.
 * 
 * 
 * Not Operator: !
 * Este operador analisa se o valor é verdadeiro/falso e retorna
 * o oposto disso em forma de booleano.
 */
const josh = !0 // como 0 é false, e o oposto é true, josh === true
const hannah = 0 // lembre-se que 0 é falso
const sirius = !hannah // sirius é um boolean com valor true
// Quais são os valores das variáveis abaixo?
const charity = !""             // true
const funny = !!""              // false
const bone = !!!"hello world"   // false
const tricks = "hello" + !!0    // "hellofalse"
const zach = false
const final = zach === tricks   // false
const semi = zach === !tricks   // true

/*
 * And Operator: &&
 * O operador "e" lógico avalia as expressões à direita e esquerda
 * verificando se cada uma é verdadeira ou falsa na seguinte ordem:
 */

// Se o lado esquerdo for falso, retorne o valor dele:
const c = '' && 'hello' // c = ""

// Se o lado esquerdo for verdadeiro, retorne o valor à direita
let d = 'hello' && false // d = false
d = 'hello' && 5         // d = 5
d = 5 && 'hello'         // d = 'hello'
d = true && ""           // d = ""
d = 0 && 'hello'         // d = 0

// Quais os resultados abaixo?
d = 7 && 9               // d = 9
d = 0 && ""              // d = 0

/*
 * Or Operator: ||
 * O operador "ou" lógico avalia as expressões à direita e esquerda
 * verificando se cada uma é verdadeira ou falsa na seguinte ordem:
 */

// Se o lado esquerdo for verdadeiro, retorne o valor dele:
const e = "happy" || "day" // e = "happy"

// Se o lado esquerdo for falso, retorne o valor à direita
let f = "" || "hello"       // f = "hello"

// Quais os resultados abaixo?
f = 7 || false              // f = 7
f = false || "hello"        // f = "hello"
f = 0 || "world"            // f = "world"
f = 7 || 9                  // f = 7

// Vamos exercitar:
let cedric = 5 && "hello"   // cedric = "hello"
cedric = 5 && !"hello"      // cedric = false
const albus = (5 + 5) || 0  // albus = 10
const dumbledore = 0 || 10  // dumbledore = 10
const harry = albus > 5 && albus < 10 // harry = false

/*
 * Assim como na matemática, JS também tem uma ordem de precedência
 * se existem parênteses, como em "const albus = (5 + 5) || 0",
 * o que estiver dentro dos parêntetes é resolvido antes do teste
 * lógico, já os operadores como > e < são avaliados antes de || e &&
 * como é o caso do último exemplo acima.
 */
