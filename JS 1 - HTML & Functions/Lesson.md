# JS 1 - HTML & Funções

## Preparação

Esta sessão contém algumas perguntas para garantir que você entendeu os conceitos do capítulo anterior.

Antes de prosseguir com os exercícios, crie uma nova branch no git

- `git checkout -b JS1` Onde JS1 é o nome da branch

Para os 4 primeiros exercícios, escreva uma linha de código que usa cada função. Note que nem todas estas funções existem, então não precisa tentar executá-las no seu computador. Veja o exemplo:

#### Exemplo

Execute a função `includes`, que recebe 1 argumento, uma string

<details>
    <summary>Resposta</summary>
    <pre><code lang="Javascript">
    includes("hello")
    </pre></code>
</details>

#### Exercícios

1. Execute a função `map`, que recebe 1 argumento, uma função

<details>
    <summary>Resposta</summary>
    <pre><code lang="Javascript">
    map(() => {})
    </pre></code>
</details>

2. Execute a função `setTimeout`, que recebe 2 argumentos, uma função e um número
<details>
    <summary>Resposta</summary>
    <pre><code lang="Javascript">
    setTimeout(() => {}, 500)
    </pre></code>
</details>

3. Execute a função `app.get`, que recebe 2 argumentos, uma string e uma função
<details>
    <summary>Resposta</summary>
    <pre><code lang="Javascript">
    app.get("bonjour", () => {})
    </pre></code>
</details>

4. Execute a função `fs.writeFile`, que recebe 3 argumentos: uma string, outra string e uma função
<details>
    <summary>Resposta</summary>
    <pre><code lang="Javascript">
    fs.writeFile("hola", "aloha", () => {})
    </pre></code>
</details>

5. Resolva o seguinte:
```javascript
    const lannister = (input) => {
        return input
    }
    const stark = () => {
        return 99
    }
    let res = stark             // o que tem em res?
    res = lannister(stark)      // o que tem em res?
    res = lannister(stark())    // o que tem em res?
```
<details>
    <summary>Resposta</summary>
    <pre><code lang="Javascript">
    const lannister = (input) => {
        return input
    }
    const stark = () => {
        return 99
    }
    let res = stark            // função: stark
    res = lannister(stark)     // função: stark
    res = lannister(stark())   // 99
    </pre></code>
</details>

6. Resolva o seguinte:
```javascript
const baratheon = (run_me) => {
  return run_me() + 5
}
const tyrell = () => {
  return 10
}

let res = tyrell          // o que tem em res?

res = baratheon( tyrell ) // o que tem em res?

res = baratheon( () => {
  return 92
}, 3)                     // o que tem em res?

res = baratheon( () => {
  const b = 95
  tyrell()
})                        // o que tem em res?
```
<details>
    <summary>Resposta</summary>
    <pre><code lang="Javascript">
    const baratheon = (run_me) => {
        return run_me() + 5
    }
    const tyrell = () => {
        return 10
    }
    let res = tyrell          // res é a função: tyrell
    res = baratheon( tyrell ) // res tem 15
    res = baratheon( () => {
        return 92
    }, 3)                     // res tem 97
    // O segundo argumento está aí pra te enganar. 
    // baratheon não se importa com nenhum argumento
    // além do primeiro
    res = baratheon( () => {
        const b = 95
    tyrell()
    } )    // res tem NaN (Not a Number)
           // (undefined + 5 vai ser mostrado como NaN, Not a Number)
           // CUIDADO! Este tipo de erro acontece o tempo todo, então fique atento.
           // Se a função não tem um `return`, ela sempre irá retornar undefined
           // não importanod o que as funções dentro dela tenham retornado.
    </pre></code>
</details>

---
E então, como se saiu?