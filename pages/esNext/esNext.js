//Conceitos de ESNext

const { result, map, set, reject } = require("lodash")

//Rest/Spread (...)
//Se espalha as estruturas, spread. 
//Se junta, rest. .


//spread com objeto
const func = {
  nome:"Maria",
  salario: 1522
}

const funcCloneComSpread = {ativo: true, ...func}

console.log(funcCloneComSpread)

//rest com função
function restzin(...numeros) {
  let total = 0
  numeros.forEach(n=> total += n)

  return total
}

console.log(restzin(1,2,3,4,5))

//tagged template - processa o template dentro de uma função

function tag(partes, ...valores) {
  console.log(partes)
  console.log(valores)
  console.log("Outra String nada a ver")
}

const aluno = "Math"
const sobrenome = "Tavares"
console.log(tag `nome: ${aluno}, Sobrenome: ${sobrenome}`)


function real(partes, ...valores) {
  const result = []
  valores.forEach((valor, indice) =>{
    valor = isNaN(valor) ? valor : `R$: ${valor.toFixed(2)}`
    result.push(partes[indice], valor)
  })
  return result.join('')
}

const preco = 29.8
const precoParcela = 11

console.log(real `a vista: ${preco}, a prazo: ${precoParcela}`)

//MAP

  const tecnologias = new Map()

  tecnologias.set("React", {framework: false})
  tecnologias.set("React", {framework: true})

  console.log(tecnologias.get('React').framework)

  const chavesVariadas = new Map([
    [function () { }, "Função"],
    [{}, "Objeto"],
    [123, "numero"]
  ])

  chavesVariadas.forEach((vl, ch) =>{
    console.log(ch, vl)
  })

  console.log(chavesVariadas.has(123))
  chavesVariadas.delete(123)
  console.log(chavesVariadas.delete(123))
  console.log(chavesVariadas.size)

  //Set - Conjunto não indexado e não aceita repetição

  const times = new Set()

  times.add("Vasco")
  times.add("Gremio")
  times.add("Palmeiras")
  times.add("Corinthians")
  
  console.log(times)
  console.log(times.size)
  console.log(times.delete("Gremio"))
  console.log(times)
  console.log(times.has("Vasco"))

  const nomes = ["Matheus", "Lucas", "Matheus", "Maria"]
  const nomesSet = new Set(nomes)

  console.log(nomesSet)

  //For of - itera em cima de valores

  for(let letra of "Olá mundo"){      //for of itera no valor
    console.log(letra)
  }

  for(let letra in "Olá mundo"){      //for in itera no indice
    console.log(letra)
  }


//Promises - Promessa - Utilizado para comportamento assíncronos

/** simulando uma promise assincrona que vai retornar uma frase depois de um tempo passado
 * resolve e reject são funções que são chamadas quando a promise é realizada.
 */

function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase)
    }, segundos*1000)
  })
}

/** Chamando a promise. Depois de resolvida a promise o comando .then é chamado.
* Podemos encadear vários .then
* O resolve aceita apenas um parâmetro
* O resolve é passado no primeiro then.
* .catch trata os erros
*/

falarDepoisDe(3, "Que bacana")
  .then(frase => frase.concat("?!?!?!?"))
  .then(outraFrase => console.log(outraFrase))
  .catch(e => console.log(e))



//Async/Await - Fazer uma coisa não síncrina - Recurso do ES8 (simplifica o uso de promise)

const http = require('http')

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  return new Promise((resolve, reject) => {
    http.get(url, res =>{
      let resultado =''

      res.on('data', dados => {
        resultado += dados
      })

      res.on('end', ()=>{
        try {
          resolve(JSON.parse(resultado))
        } catch (e) {
          reject(e)
        }
      })

    })
  })
}

let obterAlunos = async ()=> {
  const ta = await getTurma('A')
  const tb = await getTurma('B')
  const tc = await getTurma('C')
  return [].concat(ta,tb,tc) //Vai retornar um array vazio com com objetos asyncFunction.
}

obterAlunos().then(alunos => alunos.map(a=>a.nome)) //convertendo o array de asyncFunction em dados.
