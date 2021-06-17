/*
 * Objetos
 * Em JS, objetos podem ser comparados com objetos da vida real. O condeito de objetos
 * pode ser entendido como objetos tangíveis do cotidiano, como carros, casas e pessoas.
 * 
 * Em JS, um objeto é uma entidade independente, com propriedades e um tipo. Comparemos
 * com um carro por exemplo. Um carro é um objeto com propriedades, ele tem uma cor,
 * um design, peso, materiais de fabricação, etc. Do mesmo modo, o objeto em JS é uma
 * coleção de propriedades, onde cada propriedade tem um nome (também chamado de key/chave)
 * e um valor, similar a um dicionário. O nome de uma propriedade pode ser qualquer
 * string, incluíndo uma string vazia "". O valor pode ser de qualquer tipo, como string,
 * boolean, number, e null, mas não pode ser undefined.
 * 
 * Até agora trabalhamos com 3 tipos primitivos de dados: number, string e boolean.
 * Eles são chamados de primitivos pois seus valores contém apenas uma única coisa, como
 * string, boolean, number ou null.
 * Em contraste, objetos armazenam coleções e dados mais complexos, e assim, o tipo de
 * dado "Object" é classificado como um tipo de dado complexo.
 * 
 * O último tipo de dado que você precisa conhecer é o objeto, e nessa seção vamos ver
 * o objeto mais importante: O objeto Function.
 * 
 * Para criar um objeto, você deve usar a palavra reservada "new", veja:
 * 
 * Criando um objeto Pessoa
 * const a = new Pessoa()
 * 
 * Criando um objeto Array
 * const b = new Array()
 * 
 * Os objetos do exemplo acima podem não existir de verdade, então, ao tentar usar no
 * browser ou no Node pode dar um erro.
 * 
 * Vamor experimentar agora:
 */
// Crie um objeto Date
const a = new Date()
// Crie um objeto Function
const b = new Function()
// Crie um objeto Array
const c = new Array()
// Crie um objeto Object
const d = new Object()
// Crie um objeto EventEmitter
const e = new EventEmitter()