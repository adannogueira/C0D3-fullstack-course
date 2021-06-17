/*
 * Function
 * Você já precisou fazer uma coisa (como cozinhar arroz), em que era necessário repetir
 * e repetir várias vezes e você pensou "e se eu escrevesse as instruções para alguém fazer
 * isso por mim?"
 * 
 * No mundo da computação, o exemplo acima seria uma função. Uma função é um agrupamento
 * de instruções escritas para desempenhar uma tarefa específica.
 * Um função só é executada quando "algo" a invoca/chama.
 * 
 * Porque usar funções?
 * Assim você pode reutilizar o código: Escreva uma vez e use pra sempre.
 * Você pode usar o mesmo código várias vezes com diferentes argumentos para obter diferentes
 * resultados.
 * 
 * Função de exemplo (isto é só um exemplo! não escreva funções assim)
 */
const greet = new Function ("a", "b", "return a + ' says, hello ' + b")
// No exemplo acima 'greet' é  uma variável que armazena um objeto function
// Objetos function são chamados usando () após seu nome:
let c = greet("Ironman", "Poodle")  // c é "Ironman says, hello Poodle"
c = greet("base9", "base2")         // c é "base9 says, hello base2"

/*
 * Vamos desmembrar o exemplo acima:
 * * Parâmetros: variáveis para armazenar os dados quando a função rodar
 * * Execução: executar uma função é chamá-la adicionando () após o seu nome
 * * Argumentos: dados passados para a função ao executá-la, dentro dos ()
 * * Corpo da Função: o código que efetivamente é executado quando a função é chamada,
 * perceba que no exemplo acima o corpo é uma string, após a execução da função,
 * a string é convertida em código JS no exemplo, o código fica assim:
 * return a + ' says, hello ' + b
 * * Retorno: o resultado da função executada, se a palavra reservada 'return' não estiver
 * no corpo de uma função, então ela automaticamente retorna 'undefined'.
 * 
 * Vamos exercitar:
 */
const fn = new Function('a', 'b', 'a + b')
let result = fn(23, 2) // Qual o resultado?
// result = undefined, nada é retornado

const fn2 = new Function('return 10')
result = fn2() // Qual o resultado?
// result = 10

const fn3 = new Function('x', 'y', 'return x === y')
result = fn3() // Qual o resultado?
// true, undefined === undefined
result = fn3(9, 9) // Qual o resultado?
// true, 9 === 9, ambos são do tipo Number e tem o mesmo valor
result = fn3(9, 8) // Qual o resultado?
// false, são ambos Number, mas de valores diferentes

const secret = new Function ("a", "b", "a = a + 9; return a + b")
let b = secret // O que tem em b?
// b armazena a função secret
c = secret("base9", "base2") // O que tem em c?
// c = "base99base2", o sinal de adição vai concatenar strings
c = b(10, 2) // O que tem em c?
// c = 21

/*
 * Escrever o corpo de uma função usando string é uma maneira dolorosa de fazer isso,
 * existe um outro jeito, mais fácil:
 */
greet2 = function(a, b) {
    return a + ' says, hello ' + b
}
secret2 = function(a, b) {
    a = a + 9
    return a + b
}

/*
 * Retorno da função
 * Quando o JS chega noa declaração "return", a função vai parar de executar, retornar
 * o que estiver depois da declaração e sair da função.
 * Se a função foi executada a partir de uma declaração, o JS vai entregar o retorno ao
 * declarante e então seguir para a próxima, qualquer valor de retorno vai ser passado
 * a quem invocou a função.
 */
// Calcule a soma de dois números e retorne o resultado
const sum = function(a, b) {
    return a + b                // A função retorna a + b
    const c = a - b             // Esta linha nunca é executada
}

const x = sum(4, 3)             // A função sum é invocada
                                // o valor do retorno é atribuído à variável x

/*
 * Arrow Function
 * Outra maneira de criar um objeto função é utilizando a função seta (arrow function),
 * a sua definição inclui o simbolo de seta "=>". Perceba que a palavre reservada "function"
 * não aparece. Este é o método preferido hoje para criar funções. Existem diferenças
 * entre "function" e "() => {}" e veremos isso mais tarde.
 * 
 * Sintaxe:
 * const name = (parâmetro1, parâmetro2, parâmetro3) => {
 *   //bloco da função
 * }
 * 
 * Para escrever uma arrow function e armazená-la em uma variável chamada "makeBasket",
 * escreva isso:
 */
const makeBasket = () => {
    const b = 500
    return b
}

/*
 * Você pode colocar instruções colocando-as entre as {}. No exemplo acima, a função cria
 * uma variável e retorna o seu valor. 'return' é a palavra reservada usada para parar
 * a execução da função e retornar seu valor.
 */
let snitch = makeBasket // O que tem em snitch?
// snitch contém a função makeBasket()
const batter = makeBasket // O que tem em batter?
// batter contém a funçaõ makeBasket()

/*
 * O símbolo = armazena o lado direito no lado esquerdo. Como no exemplo o lado direito
 * é uma função, ambos, batter e snitch são funções. Perceba que eles não recebem o valor
 * 500, porque não executamos a função ainda. Já chegaremos a isso.
 * 
 * Esta função é mais complexa do que as dos exemplos acima:
 */
const fn1 = (a, b) => {
    let c = a + b
    if (c > 2) {
        c = 0
    }
    return c + 1
}
const result2 = fn(22, 1)
// Este exemplo é o método preferido hoje para criar funções hoje.

/*
 * Exercícios:
 * Escreva uma função solution que retorne um valor:
 */
// Number
const fnFactorial = (a) => {
    let factor = 1
    for (let i = 1; i <= a; i++) {
        factor *= i
    }
    return factor
}
console.log(fnFactorial(5))
// String
const fnStringer = (nome) => {
    let letras = []
    for (let i = 0; i < nome.length; i++) {
        letras.push(nome[i])
    }
    return letras
}
console.log(fnStringer("Adan"))
// Boolean
const fnBool = (a, b) => {
    return a < b
}
console.log(fnBool(1,'oito'))
// Function
const fnFunc = (a) => {
    return function a() {
        console.log('Função useless.')
    }
}
fnFunc('escreve')()

/*
 * Executando uma Function
 * Você pode dizer ao computador pra executar o bloco contido em uma função simplesmente
 * digitando () após o nome dela. Por exemplo makeBasket() executa a função makeBasket do
 * exemplo acima.
 * 
 * Executar uma função pode ter vários nomes, você pode ouvir "executar uma função",
 * "rodar uma função" ou "chamar uma função", e todos se referem a mesma coisa.
 * 
 * Exercício:
 */
let keeper = () => {
    return 5;
}
snitch = keeper     // O que tem em snitch?
// snith contém a função keeper
snitch = !keeper    // O que tem em snitch?
// false
snitch = !keeper()  // O que tem em snitch?
// false

/*
 * Exemplos
 * Funções são o conceito mais importante em JS, então, aqui vão mais exemplos.
 * Lembre-se, você precisa seguir o raciocínio linha a linha, como o computador faz.
 * Os valores das variáveis mudam constantemente.
 */
let points = 0
let igor = () => {
    points = points + 1
    return points
}
let luna = igor         // O que tem em luna?
// a função igor
luna = igor() + igor()  // O que tem em luna?
// 3, na primeira execução de igor(), points vai de 0 a 1, na segunda execução vai de 1 a 2.

/*
 * Se uma função não retorna nada, então automaticamente ela tera o retorno undefined.
 * Em JS, undefined é um tipo primitivo, além disso, ele é falso.
 */
const carrotCakeRecipe = () => {}
snitch = carrotCakeRecipe()     // O que tem em snitch?
// undefined
snitch = !carrotCakeRecipe()    // O que tem em snitch?
// true

const work = () => {
    const blah = 5 + 8
}
const wage = work()     // O que tem em wage?
// undefined, blah não foi retornado pela função work

// Você também pode executar funções dentro de outras funções:
let people = ""
igor = () => {
    people = people + " muggle "
    return people
}
let solution = () => {
    igor()
    igor()
    igor()
}
luna = solution()   // O que tem em luna?
// undefined
console.log(people) // O que tem em people?
// " muggle  muggle  muggle "

// Uma função arrow pode retornar qualquer coisa! Nos exemplos acima, vimos funções
// retornando strings, numbers e undefined. Agora experimente, escreva uma função
// arrow que retorne uma função arrow.
const canaveral = () => {
    console.log('Lightning')
    return () => {
        console.log('Thunder')
    }
}

// Veja outro exemplo:
people = ""
igor = () => {
    return () => {
        people = people + " muggle "
        return people
    }
}
luna = igor()           // luna agora é uma função
let lovegood = luna()   // lovegood tem valor " muggle "
lovegood = luna()       // lovegood tem valor " muggle  muggle "
// Lembre-se que a cada execução, a variável people é alterada

//Exercícios:
// 1. escreva uma função arrow chamada solution que execute a função console.log 3 vezes
// e retorne um número.
solution = () => {
    let num;
    for (num = 0; num < 3; num++) {
        console.log("Num é " + num)
    }
    return num
}
const solucao = solution()
console.log(solucao)

// 2. escreva uma função arrow chamada solution que retorne uma função. Quando a função
// retornada for executada, console.log será executado 3 vezes.
solution = () => {
    return () => {
        console.log('foo')
        console.log('bar')
        console.log('spam')
    }
}
const spam = solution()
spam()

/*
 * Parâmetros / Argumentos
 * As vezes instruções podem ter requerimentos/exigências. Quando você escreve instruções
 * para cozinhar arroz por exemplo, é necessário ter arroz e uma panela.
 * 
 * No mundo da computação algumas funções precisam de dados adicionais para executar.
 * Por exemplo, a função add2 precisaria de um número para só então adicionar 2 a ele.
 * 
 * Parâmetros são entradas para uma função. Quando escrever uma função, os parâmetros
 * serão variáveis criadas para receber os valores reais quando a função for executada.
 * Quando você executa uma função, os dados passados são chamados argumentos.
 */
let lucius = (dobby) => {
    return dobby + 2
}
let james = lucius(5)                   // james é 7, já que lucius retorna 5 + 2
james = lucius(5) === lucius(3) + 2     // Qual o valor de james?
// true

points = 0
let draco = (kreacher, winky, fluffy) => {
    points = kreacher + winky
    return points + fluffy
}
// draco é uma função que recebe 3 parâmetros
let malfoy = draco(1, 2, 3) + draco(3, 2, 1)    // Qual o valor de malfoy?
// 12
points                                          // Qual o valor de points?
// 5

/*
 * Você pode passar qualquer argumento para uma função! Vaja no exemplo abaixo uma
 * função sendo passada como argumento para outra função.
 */
let grindle = () => {
    return 10
}
let wald = (cast) => {
    return cast()
}
let grindleWald = wald(grindle)

/*
 * Explicação sobre o exemplo acima: estamos passando a função grindle como argumento
 * para a função wald, grindle é o parâmetro 'cast' da função wald, e wald retorna o
 * resultado da execução da função em 'cast', que nesse caso é 10, então, grindleWald = 10
 */
wald = (cast) => {
    cast()
}
grindleWald = wald(() => {
    return 10
})
/*
 * Neste outro exemplo, estamos passando uma função como argumento para a função wald,
 * assim como no exemplo anterior.
 * Entretanto, wald é uma função que não retorna nada, então ela vai retornar undefined.
 * Logo, grindleWald = undefined
 * 
 * No próximo exemplo vamos executar o método setTimeout do JS. Este método executa uma
 * função ou um código após um delay em milisegundos.
 * 
 * Nota: use setTimeout() para repetir uma execução continuamente.
 */
let invisible = () => {
    setTimeout( () => {
        return 100
    }, 1000)
}
let cloak = invisible() // O que tem em cloak?
// undefined

/*
 * Dica: quando você escreve uma função os tipos de dados dos parâmetros não importam.
 * muitos dos exercícios abaixo devem ter a mesma resposta.
 * 
 * Escreva uma função solução() que tenha:
 */

// Uma string como parâmetro e retorne uma função
solution = (str) => {
    return () => {
        console.log(str)
    }
}

// Um Number como parâmetro e retorne uma função
solution = (nn) => {
    return () => {
        console.log(nn)
    }
}

// Um boolean como parâmetro e retorne uma função
solution = (boo) => {
    return () => {
        console.log(boo)
    }
}

// Uma função como parâmetro e retorne uma função
solution = (fcn) => {
    return () => {
        fcn()
    }
}

// 2 parâmetros, uma função e um Number, e retorne uma função
solution = (fcn, nn) => {
    return () => {
        console.log(fcn(nn))
    }
}

// Execute a função console.log e passe 2 argumentos (strings)
console.log('Hello there...' + 'General Kenobi')

// Execute a função app.get e passe 1 argumento (uma função arrow)
//app.get(() => {
//    console.log('Cambio...')
//})

// Execute a função setTimeout e passe 2 argumentos (uma função arrow e um Number)
setTimeout( () => {}, 1000)

/*
 * Funções com Comportamento condicional
 * Lembre-se que ao executar código condicionalmente, você usa a declaração "if", assim:
 * if (condição) {instruções a serem executadas}
 * 
 * Um valor verdadeiro ou falso vai dentro dos parênteses, um teste lógico.
 * O código entre as chaves só vai executar se o teste lógico entre os parênteses retorna
 * verdadeiro. Veja os exemplos:
 */
let remember = (events) => {
    if (events > 5) {
        return "well done"
    }
    return "fail"
}
result = remember(0)    // result = "fail"
result = remember(20)   // result = "well done"

let newt = (x) => {
    if (x === 5) {
        return 13
    }
    return x + 1
}
let tonks = newt(3)     // O que tem em tonks?
// 4
tonks = newt(11)        // O que tem em tonks?
// 12
tonks = newt(5)         // O que tem em tonks?
// 13

let neville = (long, bottom) => {
    if (long > bottom) {
        long = long + 3
    }
    return long
}
let hermione = neville(4, 5)    // O que tem em hermione?
// 4
hermione = neville(9, 2)        // O que tem em hermione?
// 12

points = 3
let charlie = (arthur, percy) => {
    points = points + 1
    if (arthur > percy) {
        return points
    }
    return arthur + points
}
let hedwig = charlie(4, 5) || charlie(9, 2) // O que tem em hedwig?
// 8
let nick = charlie(9, 2)                    // O que tem em nick?
// 5

points = 3
charlie = (arthur, percy) => {
    points = points + 1
    if (arthur > percy) {
        return points
    }
    return 0
}
hedwig = charlie(4, 5) || charlie(9, 2)     // O que tem em hedwig?
// 5
nick = charlie(9, 2)                        // O que tem em nick
// 6

// Exercícios:

// Escreva uma função arrow nomeada massiveOrSmall que soma 2 números e retorna "massive"
// se o resultado for maior que 100 ou "small" caso contrário.
const massiveOrSmall = (a, b) => {
    return a + b >= 100 ? 'massive' : 'small'
}

// Escreva uma função nomeada sumOrTen que recebe 2 números. Ela deve retornar 10 se
// ambos forem maiores que 10, caso contrário, retorna a soma entre ambos.
const sumOrTen = (a, b) => {
    if (a > 10 && b > 10) {
        return 10
    }
    return a + b
}

// Escreva uma função nomeada combineIfOver42 que retorna duas strings concatenadas ou ""
// dependendo de um terceiro parâmetro ser maior que 42
const combineIfOver42 = (a, b, c) => {
    return c > 42 ? a + b : ""
}

// Escreva uma função nomeada compareStrings que retorna verdadeiro se duas strings forem
// iguais e falso caso contrário.
const compareStrings = (a, b) => {
    return a === b
}
