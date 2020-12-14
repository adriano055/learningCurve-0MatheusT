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
}) //defino caminho e encoding
console.log(`${config.teste.teste2}:${config.teste.teste4}`)