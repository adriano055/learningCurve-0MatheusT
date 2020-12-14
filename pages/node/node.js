const axios = require('axios')

axios.get('http://files.cod3r.com.br/curso-js/funcionarios.json').then(response => {
  const funcionarios = response.data
  //console.log(funcionarios)

  const apenasChina = f => f.pais === 'China'
  const apenasMulher = f => f.genero === 'F'
  const menorSalario = (func, funcAtual) => {
    return func.salario <funcAtual.salario ? func : funcAtual
  }


  let mulherChinesa =  funcionarios.filter(apenasChina).filter(apenasMulher).reduce(menorSalario)

  console.log(mulherChinesa)
})

//Node faz chache dos valores passados no require.
//Se o objeto já tiver sido criado.

//Caso queira criar um objeto novo, sendo que o mesmo já foi criado anteriormente, podemos criar
//com factory function.

//O node tem um objeto global, assim como no browser (window)
console.log(global)

global.minhaApp = {
  saudacao(){
    return 'Olá, mundo!'
  },
  nome: 'MinhaApp'
}

//Uma vez que disponibilizado no global, o que foi definido fica disponível para todo mundo.

console.log(minhaApp.nome)

//This
//this === exports === module.exports (fora de função, dentro do módulo)
//this === global (dentro de função)

//Com o node nós conseguimos manipular arquivos com o módulo filesystem

const fs = require('fs') //Busca no node o filesystem - vem instalado por padrão
const caminho = __dirname + '/testeFs.json'

//Sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8') //defino caminho e encoding
console.log(conteudo)

//Assincrono
fs.readFileSync(caminho, 'utf-8', (err, conteudo) =>{
  const config = JSON.parse(conteudo)
  console.log(`${config.teste.teste2}:${config.teste.teste4}`)
}) //defino caminho e encoding

//abrindo json diretamente sem precisar converter (node suporta isso só pra json, tem que especificar o .json)
const configJson = require('./testeFs.json')
console.log(configJson.teste)

//Lendo uma pasta normal

fs.readdir(__dirname, (err, conteudo) =>{
  console.log("Conteudo da pasta")
  console.log(conteudo)
})


const obj2 = {
  nome: 123,
  cor: "teste"
}

//escrevendo arquivos com node.

fs.writeFile(__dirname + '/arquivoEscritoComNode.json', JSON.stringify(obj2), (err) =>{
  console.log(err || "Arquivo Salvo")
})

//Biblioteca é diferente de framework
//Biblioteca são funcionalidades - axios, lodash, jQuery...
//Frameworks são as estruturas - Angular, GraphicL, Vue, Express ...

//-----------------------------------------------
//Tarefas automatizadas com node

const schedule = require('node-schedule')

const tarefaAuto1 = schedule.scheduleJob('*/5 * 13 ** 2', function() {
  console.log("Executando Tarefa 1", new Date().getSeconds())
})

setTimeout(function(){
  tarefaAuto1.cancel()
  console.log("Tarefa Cancelada!")
}, 20000)

const regra = new schedule.RecurrenceRule() //tarefa em recorrencia
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 12
regra.second = 30

const tarefaAuto2 = schedule.scheduleJob(regra, function() {
  console.log("Executando Tarefa ", new Date().getSeconds())
})

//Entrada e saida - Digitar no terminal do node
const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo) {
  process.stdout.write("Fala anonimo")
  process.exit()
}else{
  process.stdout.write("Informe seu nome: ")
  process.stdin.on('data', data =>{
    const nome = data.toString().replace('\n', '')

    process.stdout.write(`Fala ${nome}!! \n`)
    process.exit()
  })
}
