console.log("Functions")

//funções podem ter return ou não, quando não tem retornam undefined.
//podemos guardar funções em variáveis, em array, em atributos de objeto
//podemos passar uma função como parametro de outra função
//podemos retornar uma função em uma função
//parametros e retornos são opcionais

function sum(a,b) {
  return a+b
}

console.log("this is a return of a sum function: sum(a,b):", sum(2,3))

function variableParam() {
  let sum1 = 0
  for(i in arguments){
    sum1 += arguments[i]
  }
  return sum1
}

console.log(variableParam(1,2,3,4,5,6))


console.log("----------------")

//this - é o objeto que está sendo referenciado no atual contexto de execução
//porém, pode variar - ter cuidado.
//deve-se usar a função bind para solucionar problemas de escopo com this.

console.log("Arrow Functions")

let hi = () => 'hello'

console.log("This was made with arrow function: ", hi())

//funções anônimas são funções sem nome

let sum2 = function (x,y){
  return x+y
}

/*Basicamente, callback é um tipo de função que só é executada após o processamento de outra função.
Na linguagem JavaScript, quando uma função é passada como um argumento de outra, ela é, então, chamada
de callback.

Funções construtoras funcionam como classes em OO.
Geram um template que com métodos públicos (uso de let) e privados (this.) para fazer alterações

Funções buscam o escopo léxico onde foram definidas. */

/*----------------------CLOSURE----------------------------
Closure é o escopo criado quando a função é declarada 
permite a função acessar e manipular variáveis externas a função.*/

function fora(x) {
  function dentro(y) {
     return x + y;
  }
  return dentro;
}
fn_inside = fora(3); // Pense nisso como: Receba uma função que adicionará 3 ao que quer que você repasse para ela
console.log(fn_inside(5)) // retorna 8

console.log(fora(3)(5))

/*Funções factory.
Evitam códigos iguais de serem usados constantemente.
Retorna Objeto (SEMPRE RETORNA UM NOVO OBJ)*/

//Factory Simples
function criarPessoa(){
  return {
    nome: "aaa",
    sobrenome: "aaaa"
  }
}

//Factory com Args
function criarPessoa(nome, sobrenome){
  return {
    nome: nome,
    sobrenome, //Da no mesmo que sobrenome: sobrenome, já que o parametro é o mesmo do valor do ob.
  }
}

//Funções auto-invocadas - IIFE - Funções imediatamente invocadas.
//Usado para fugir do escopo global.
(function iife() {
  console.log("IIFE")
})()
