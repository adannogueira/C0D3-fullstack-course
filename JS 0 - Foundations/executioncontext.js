/*
 * Contexto de Execução
 * Vamos analisar o que acontece quando a função abaixo é executada, passo a passo.
 * 
 * Antes de o computador executar seu código, primeiro ele cria uma 'caixa' para
 * armazenar todas as variáveis. Chamamos esta caixa de contexto de execução global.
 * 
 * Toda vez que o computador executa uma função, ele cria uma nova caixa dentro da
 * caixa onde a função foi criada (depois de entender isso, substitua caixa por 
 * contexto de execução). Vamos usar o exemplo abaixo.
 * 
 * Antes de executar o código, o computador cria o contexto de execução global
 */                                             // Global
let points = 0                                  //+---------------------------------+
const draco = (kreacher, winky, fluffy) => {    //|Variáveis                        |
    points = kreacher + winky                   //|                                 |
    return points + fluffy                      //|                                 |
}                                               //|                                 |
const malfoy = draco(1, 2, 3)                   //|                                 |
const mal2 = draco(3, 2, 1)                     //+---------------------------------+

// Depois o computador irá rodar seu código linha por linha
// Linha 1: Criar a variável global 'points'
// Linha 2: Criar a variável global 'draco'

// Global
//+---------------------+
//|Variáveis            |
//|points: 0            |
//|draco: function      |
//|                     |
//|                     |
//+---------------------+

// Linha 6: Executar a função draco com os parâmetros 1, 2 e 3
// Lembre-se que a cada vez que uma função é executada uma nova caixa (contexto)
// é criado, como a função aqui tem 3 parâmetros, 3 variáveis são criadas

// Global
//+---------------------+
//|Variáveis            |
//|points: 0            |
//|draco: function      |
//| draco               |
//| +------------+      |
//| |Variáveis   |      |
//| |kreacher: 1 |      |
//| |winky: 2    |      |
//| |fluffy: 3   |      |
//| +------------+      |
//+---------------------+

// Linha 3: Dentro da função draco, a variável global points, no contexto global,
// é atualizada e recebe 3

// Global
//+---------------------+
//|Variáveis            |
//|points: 3            |
//|draco: function      |
//| draco               |
//| +------------+      |
//| |Variáveis   |      |
//| |kreacher: 1 |      |
//| |winky: 2    |      |
//| |fluffy: 3   |      |
//| +------------+      |
//+---------------------+

// Linha 4: A função draco retorna 6 - A função está concluída, a linha 6 continua
// e malfoy recebe o valor 6. O contexto de execução da função draco é removido
// e não pode mais ser acessado.

// Global
//+---------------------+
//|Variáveis            |
//|points: 0            |
//|draco: function      |
//|malfoy: 6            |
//|                     |
//+---------------------+

// Linha 7: Executar a função draco com os parâmetros 3, 2 e 1
// Lembre-se que a cada vez que uma função é executada uma nova caixa (contexto)
// é criado, como a função aqui tem 3 parâmetros, 3 variáveis são criadas

// Global
//+---------------------+
//|Variáveis            |
//|points: 0            |
//|draco: function      |
//|malfoy: 6            |
//| draco               |
//| +------------+      |
//| |Variáveis   |      |
//| |kreacher: 3 |      |
//| |winky: 2    |      |
//| |fluffy: 1   |      |
//| +------------+      |
//+---------------------+

// Linha 3: Dentro da função draco, a variável global points, no contexto global,
// é atualizada e recebe 5

// Global
//+---------------------+
//|Variáveis            |
//|points: 5            |
//|draco: function      |
//|malfoy: 6            |
//| draco               |
//| +------------+      |
//| |Variáveis   |      |
//| |kreacher: 3 |      |
//| |winky: 2    |      |
//| |fluffy: 1   |      |
//| +------------+      |
//+---------------------+

// Linha 4: A função draco retorna 6 - A função está concluída, a linha 6 continua
// e mal2 recebe o valor 6.

// Global
//+---------------------+
//|Variáveis            |
//|points: 0            |
//|draco: function      |
//|malfoy: 6            |
//|mal2: 6              |
//+---------------------+

// E pronto! Antes da execução do código terminar, o contexto de execução global
// possui as seguintes variáveis globais:
// points: 5
// draco: function
// malfoy: 6
// mal2: 6

/*
 * Resumo
 * Palavras que você deve conhecer de cabeça: variável, Number, string, boolean,
 * função, parâmetros, argumentos, contexto de execução, global
 * 
 * Conceitos que você deve conhecer:
 *  * Como criar uma variável
 *  * Quando propriedades true/false são importantes
 *  * O que significa escrever uma função e o que significa executar uma função
 *  * O que return faz
 */