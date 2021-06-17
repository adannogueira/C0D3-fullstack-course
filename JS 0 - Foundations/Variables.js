// Variáveis armazenam informações que podem mudar
marvin = 0 // marvin é uma variável, que armazena o número 0
console.log(marvin)
marvin = 42 // o número armazenado na variável foi alterado
console.log(marvin)

/*
 * Tudo aqui
 * será ignorado,
 * são apenas
 * comentários
 * e não fazem parte
 * da execução do
 * programa
 */

hands = 89 // O que será impresso no log?
console.log(hands)

/* A forma como as variáveis acima foram declaradas
 * não é uma boa prática, então evite fazer declarações
 * dessa forma.
 * Sempre use "let" para fazer a declaração da variável
 * e "const" quando for declarar uma constante, isso
 * impacta na legibilidade do código e no
 * escopo global *mais sobre isso depois.
 */

const points = 5
const res = points + 2
// "const" é usado em uma variável que não precisa ser alterada

// Tentar alterar uma variável após declara-la "const" gera erro
// points = 7 // TypeError: invalid assignment to const 'points'

let pontos = 5
pontos = 7
// "let" é usado quando a variável necessitará ser alterada
// Como regra geral, sempre use "const", a não ser que seja necessário "let"
