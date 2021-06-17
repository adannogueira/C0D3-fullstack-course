/*
 * Operador IF
 * Às vezes precisamos tomar uma decisão baseado em certas condições,
 * isso acontece o tempo todo pra mandar o computador fazer isso,
 * podemos usar o operador IF assim:
 * if (condição) {
 *   bloco a ser executado caso a condição seja verdadeira
 * }
 * 
 * Como tudo em JS é verdadeiro ou falso (como vimos em truthyandfalsey),
 * você pode colocar qualquer coisa dentro dos parênteses, o código contido
 * no bloco irá executar caso o teste nos parênteses retornar true.
 * Vamos ver:
 */
let a = 100         // a recebe 100
if (a % 2) {        // a % 2 = 0, que é falso
    a = 90          // então nada dentro do bloco vai executar
}
const b = a + 1     // Assim, b = 101

let c = 9 || 4      // 9 é verdadeiro, então o OU nem testa o lado direito
if (c > 5) {        // O resultado é verdadeiro
    c = 90          // O bloco é executado e c agora é 90
}
const d = c + 1     // d = 91

/*
 * Operador ELSE
 * Este operador especifica o bloco a ser executado caso o operador IF retorne false.
 * Sintaxe:
 * if (condição) {
 *   bloco a ser executado caso a condição seja verdadeira
 * } else {
 *   bloco a ser executado caso a condição seja falsa
 * }
 * Vamos ver:
 */
const total = 6
let result = ''     // Declarada e inicializada uma string vazia
if (total < 5) {
    result = 'Fail'
} else {
    result = 'Pass'
}

/*
 * Como em qualquer caso na codificação, se não precisar, não use.
 * Muitos devs cometem o erro de usar um ELSE toda vez que usam IF,
 * só use ELSe se você precisar dele. Você eventualmente vai ver isso
 * de forma intuitiva, apenas preste atenção ao seu código e ao que
 * dizem os revisores dele.
 */