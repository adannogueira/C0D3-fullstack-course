/*
 * Variáveis armazenam todo tipo de informação.
 * Nesta seção vamos ver 3 deles: Number, String e Boolean
 * Se você se perguntou porque são chamados primitivos,
 * vai fazer sentido quando virmos os não primitivos na
 * lição 2, sobre arrays.
 * Voltemos aos primitivos.
 * 
 * 
 * ==============================================
 * Number
 * Este tipo permite que trabalhemos com operadores de manipulação
 * como +, -, *, / (adição, subtração, multiplicação e divisão).
 * Vamos ver exemplos:
 */
const fi = 5                // 5
const mission = fi + 1      // 6
const deed = fi + mission   // 11
const space = 8 * 8         // 64
const ship = space / 4      // 16

/*
 * Um operador muito usado é o % (módulo ou resto da divisão)
 * ele retorna o que sobra de uma divisão entre 2 números.
 * Exemplo:
 * 14 % 7 = 0, pois em 14/7 sobra 0.
 * 13 % 7 = 6, pois 13/7 resulta em 1 e sobram 6.
 * 
 * Para chegar a um resultado de módulo com mais facilidade,
 * quando vir a % b, subtraia b de a até o resultado ser menor
 * do que b, veja:
 * towel = 18 % 7, logo towel é o módulo.
 * 18 - 7 = 11, que ainda é maior que 7, então repetimos
 * 11 - 7 = 4, que é menor que 7, então este é o nosso resultado
 * 18 % 7 = 4, assim, o valor de towel é 4.
 * 
 * Faça as contas abaixo e confira o resultado
 */
let rem = 15 % 3    // 0
rem = 15 % 7        // 1

/* ==============================================
 * String
 * Uma string pode ser uma palavra, uma sentença, ou só caracteres.
 * Para fazer uma string, use aspas "", ou aspas simples '', ou
 * crase ``, não importa qual deles use, só não os misture:
 * "Olá' irá gerar um erro, sempre feche a string com o mesmo
 * caracter que usou para abrí-la, neste caso "Olá", ou 'Olá'.
 * 
 * Cuidado pra não confundir strings com variáveis!
 */
const hello = 'Eu tenho 500 pratas'
let a = 'hello' // Qual é o valor de a?
a = hello       // Qual o valor de a agora, que não usamos aspas?

/*
 * Strings sem aspas são interpretadas como variáveis!
 * Por ora só é necessário saber um operador para strings,
 * "+", que é usado para concatenação de strings.
 * Por exemplo, 'End' + 'Game' resulta em 'End Game'.
 * 
 * Quando usar uma variável, não a trate como string:
 */
const b = 'hello'
const message = b + 'world'     // Qual o resultado?
const c = 5
const d = c + message           // Qual o valor de d
const e = '<h1>' + a + '</h1>'  // Qual o valor de e

/*
 * Explicação para c + message, mesmo que c tenha um valor
 * numérico, no caso 5, ocorre a concatenação '5helloworld'
 * pois o computador sabe somar número com número e concatenar
 * string com string, como ele não consegue converter 'helloworld'
 * para número, ele converte 5 para string e concatena ambas.
 * 
 * As vezes pode ocorrer de se concatenar várias strings de uma vez:
 */
const firstName = 'Tony'
const lastName = 'Stark'
const location = 'Paris'
const message = 'Welcome to ' + location + ', ' + firstName + ' ' + lastName + '!'
console.log(message) // Resultado: 'Welcome to Paris, Tony Stark!

/*
 * Templates literais
 * escrever uma sentença como a de cima não é nem um pouco prático
 * por isso o uso de + não é muito comum, ao invés disso podemos
 * usar ` (crase) e ${expressão} (placeholder) no lugar dele:
 */
const message2 = `Welcome to ${location}, ${firstName} ${lastName}!`

const actor = 'We'
const location = "farmers' market"

const story = `${actor} plan to go to a ${location} tomorrow`

/*=============================================
 * Boolean
 * Booleanos podem ter apenas 2 valores: true ou false.
 * Operadores como === 'igual a' ou !== 'diferente de'
 * > 'maior que' e < 'menor que' para comparar os dois
 * lados de uma operação. Os operadores de comparação
 * avaliam 2 valores e retornam verdadeiro 'true' ou falso 'false'
 * 
 * Exemplo:
 * 'hello' === 'hello' é true
 * 5 > 2 é true
 * 9 < 2 é false
 * 
 * Qual o resultado dos códigos abaixo:
 */
const lupin = 5 === 5               // true
const harry = 2
const ron = 4
const ginny = (harry + 2) === ron   // true
const dumbledore = ginny + 'hello'  // 'truehello'
const theSame = harry !== 'harry'   // true
