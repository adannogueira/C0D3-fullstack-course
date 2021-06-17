/**
 * CLOSURE
 *
 * Closure é um conceito que permite uma função em Javascript observar valores de que
 * necessita para funcionar, basicamente, closure é:
 * 
 * Uma função interna sempre terá acesso às variáveis e parâmetros de sua função externa
 * mesmo depois que ela já tenha retornado.
 * 
 * Veja o exemplo abaixo:
 */
const solution = (a, b) => c => a + b + c;

const func1 = solution(1, 2)
// Mesmo após o fim da execução de solution, os parâmetros a e b ainda existem
// a -> 1, b -> 2

// Por causa do closure, a func1 pode acessar os dois parâmetros
let res = func1(3)  // Qual o valor de res?
// res = 6
res = func1(5)      // Qual o valor de res?
// res = 8
res = solution(2, 3)(9) // Qualo o valor de res?
// res = 14

// Mesmo que os argumentos a e b só tenham sido passados para solution, func1 teve
// acesso a eles mesmo após o fim da execução de solution, que é sua função externa.

// Por causa do closure, as variáveis de uma função podem ser alteradas com o tempo
// Vamos ver como isso funciona no próximo exemplo. Lembre-se que cada função tem seu
// próprio contexto de execução.
const solution2 = () => {
    let counter = 0
    return () => {
        counter = counter + 1
        if (counter < 3) {
            return 0
        }
        return counter
    }
}
const arya = solution2()
res = arya()                // O que tem em res?
// 0
const sansa = solution2()

res = arya() + sansa()      // O que tem em res?
// 0
res = arya() + sansa()      // O que tem em res?
// 3
res = arya() + sansa()      // O que tem em res?
// 7
res = arya() + sansa()      // O que tem em res?
// 9
res = arya() + sansa()      // O que tem em res?
// 11

/**
 * Veja que a função retornada por solution2 acessa a variável counter dentro de
 * solution, cada vez que a função é executada, ela atualiza o counter em +1.
 * 
 * Mesmo que arya e sansa vieram de solution2, elas são funções separadas, com contextos
 * separados, assim, counter atualiza separadamente em cada uma delas, pois cada
 * contexto tem seu proprio 'counter'.
 * 
 * Agora, o que aconteceria se não tivessemos usado as boas praticas, e declarado o
 * counter sem o let?
 */
const solution3 = () => {
    counter2 = 0 // counter2 está no contexto global agora
    return () => {
        counter2 += 1
        if (counter2 < 3) {
            return 0
        }
        return counter2
    }
}
arya = solution3()
res = arya()            // O que tem em res?
// 0
const sansa = solution3() // esta execução reseta o counter2
res = arya() + sansa()  // O que tem em res?
// 0
res = arya() + sansa()  // O que tem em res?
// 7
res = arya() + sansa()  // O que tem em res?
// 11
res = arya() + sansa()  // O que tem em res?
// 15
res = arya() + sansa()  // O que tem em res?
// 19

/**
 * O que aconteceu aqui? Quando criamos counter2, sem let ou const, nós o criamos no
 * contexto global, isso significa que as funções criadas a partir de solution3 não
 * terão suas cópias do counter2 em seus próprios contextos de execução, todos dividem
 * o mesmo counter2.
 * Está é uma má prática pois quando permitimos que diferentes funções acessem a mesma
 * variável, passamos a ter resultados imprevisíveis.
 */