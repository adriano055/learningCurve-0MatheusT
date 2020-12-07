console.log("Here is a JavaScript Code.")

console.log("--------------------------------------------")

var variable1 = "hello"
let variable2 = "world"
const variable3 = "!"

console.log("Here we used 3 variables: " + variable1+" "+variable2+" "+variable3)
console.log("It was used const, let and var.")

//Here is a simple comentary.

/* A comentary 
* of multiple 
* lines
* hahaha */
console.log("--------------------------------------------")

console.log("JS has weak typing")

let typ1 = "1"
console.log("Now the variable typ1 is 1(string)")
console.log(typ1)
typ1 = 23
console.log("Now the variable typ1 is 23(number)")
console.log(typ1)

console.log("--------------------------------------------")

console.log("JS Types")

let numberzin = Number("3.0")
console.log(numberzin + " - Number")

let Stringzinha = String("opa")
console.log(Stringzinha+ " - String")

let booleanzin = Boolean(true)
console.log(booleanzin+ " - Boolean")
console.log(!booleanzin)
console.log(!!booleanzin)
console.log(!!"")
console.log(!!" ")

console.log("--------------------------------------------")
console.log("Array")
let values = [1,"opa", 8, 8.7]
console.log(values)
console.log(values[0] + " - Showed index 0 on array")
console.log(values.length + " - length of array")
console.log("Arrays are heterogenics")

/* para inserir .push
* para deletar
* .pop() - deleta o ultimo valor do array e o retorna
* delete.array[i] - somente deleta do array pelo indice
*/
console.log(values.pop())

console.log("--------------------------------------------")
console.log("Objects") //Coleção de chave e valor

const prod = {} //Objeto vazio
prod.nome = "Math"
prod.nascimento = 1995
console.log(prod)
//Podem haver aninhamentos de objetos
//JSON é diferente de Objeto

console.log("--------------------------------------------")
console.log("Null and undefined")
//Atribuição por referência de memória
const a = {nome: "math", idade : 15 }
const b = a
console.log(a)
console.log(b)

//Quando trabalha com tipo primitivo, faz cópia por valor. Não por referência
let c = 3
let d = c
d++
console.log(c)
console.log(d)

//Undefined - variável não tem valor
var value
//NULL - ausência de valor de memória
var value = null

console.log("--------------------------------------------")
console.log("Functions")
//Em JS tudo é função
//Função com e sem retorno

function soma(a, b) {
  console.log(a + b)
}
soma(2,3)

function soma2(a, b) {
  return a + b
}
soma2(4,4)

//Se chamar a função com mais parametros não dá erro, mas só computa os que são pedidos
soma(2,3,4,5,6,7)

//Se faltar parametro, a funçao roda mas como NaN
soma(2)

//Para definir valores padrões na função, só colocar na criação
//function soma2(a=1, b=8) {
//  return a + b
//}

//Podemos atribuir uma função anônima a uma variável
let soma3 = function (a, b) {
  return a+b
}

//utilizando arrow function
let soma4 = (a,b) => {    // O mesmo da função de cima
  return a+b
}

let soma5 = (a,b) => a+b //arrow reduzida - válida apenas para uma linha de código
let imprime1 = a => console.log(a) //arrow reduzida - se tiver só um parametro não precisa nem de parênteses
imprime1("Opa")