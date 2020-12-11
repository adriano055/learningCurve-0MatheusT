//Arrays in JS

//Arrays também são objetos, são heterogêneos e dinâmicos. (Boa prática - recomendado usar apenas um tipo no array.)
//Arrays são estuturas indexadas.

//Criando array
let aprovados = new Array('Bia', 'Carlos', 'Ana') // Instância de objeto
let reprovados = ['Vitor', 'Maria', 'Joao'] // Forma Literal

console.log(aprovados[0], reprovados[2])

//add no array
aprovados.push('Matheus') // Coloca no último índice
aprovados[5] = 'Derick' // Coloca no índice específico. 
//P.S. Se colocar um indice fora da sequencia, o array recebe o valor e todo o espaço que não for preenchido fica em branco.
aprovados[12] = 'Joao'

console.log(aprovados)

aprovados.sort() //Ordena o array modificando-o
console.log(aprovados)

//removendo elementos
delete aprovados[2] //remove o elementeo mas mantem a posição como undefined, não organiza o array
aprovados.splice(6, 10) // Remove a partir do indice (primeiro parametro) uma quantidade de elementos (segundo parametro)
console.log(aprovados)
reprovados.splice(1,2, 'Epaminondas') // Faz a remoção e no lugar do indice insere o item dado no terceiro parametro e assim por diante.
console.log(reprovados)

//Métodos importantes
aprovados.pop() //remove o último elemento do array - Altera o array
aprovados.push('Joao') //adciona no último índice
aprovados.shift() //Remove da primeira posição
aprovados.unshift('Maria') //adciona no primeiro indice
aprovados.slice(0,3) //Retorna um novo array com uma fatia do array de o indice do parametro 1 até o parametro 2(-1 unidade)

//Formas para percorrer arrays

//ForEach 

/*Chama uma função de callback para cada elemento que for percorrido no array
A função recebe dois elementos, o primeiro parametro é o próprio elemento que está sendo percorrido
e o segundo parametro é o índice do elemento que está sendo executado naquele momento
Se quiser pegar só o elemento, não precisa passar o índice.*/
aprovados.forEach(function (nome, indice) {
  console.log( `${indice+1} ${nome}` )
})

//MAP

/*Mapeia um array para outro do mesmo tamanho com os dados transformados
Gera um array novo
A função recebe 3 parametros - valor, indice e array*/

const rep1 = reprovados.map(function(e) {
  return (e + " Sobrenome")
})

console.log(rep1)

//Desafio do MAP

const carrinho = [
  '{"nome": "Borracha", "preco": 3.75}',
  '{"nome": "Papel", "preco": 10.55}',
  '{"nome": "Caneta", "preco": 5.75}',
  '{"nome": "Lapis", "preco": 3.45}',
]

const paraObj = json => JSON.parse(json)
const apenasPreco = prod => prod.preco

let getPreco = carrinho.map(paraObj).map(apenasPreco)

console.log(getPreco)

//Filter - filtrar com parametro passado

/** recebe 3 parametros - elemento, indice e array */

const produtos = [
  {nome: 'Cadeira', preco: 10.22 , fragil:true},
  {nome: 'Tenis', preco: 18.42 , fragil:false},
  {nome: 'Papel', preco: 5.02 , fragil:true},
  {nome: 'Clip', preco: 2.00 , fragil:false},
]

console.log(produtos.filter(function(p){
  return p.nome === 'Tenis'
}))

/**
 * Reduce - Transforma o array em um único elemento.
 * O Reduce tem um acumulador e um indice(elemento atual)
*/

const resultadoReduce = produtos.map(p => p.preco).reduce(function(acumulador,atual){
  console.log(acumulador, atual)
  return acumulador + atual
},0)

console.log(resultadoReduce)

//Concat
//Junta arrays em um único não alterando os originais.

console.log(produtos.concat(carrinho, aprovados, 'Teste'))