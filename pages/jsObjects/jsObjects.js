console.log("Objects")
console.log("Concepts - The principals")

console.log(" Abstraction - is the context \n" +
"Encapsulation - relationed to visibility \n" +
"Herance - Reuse of Code \n" +
"Polimorfism - attibute to generic variable any type")

const prod = new Object

prod.nome = "mesa"
prod.marca = "atta"
prod["preco"] = 2.8

console.log(prod)

delete prod.preco
console.log(prod)


const carro = {
  nome: "ka",
  fabricante: "ford",
  itensOpcionais: {
    AC: 'yes',
    airbags: 'yes',
    headlights: 'no'
  }
}

console.log(carro)
console.log("the car has airbags? " + carro.itensOpcionais.airbags)

//Criação de objetos
//Notação literal
const obj1 = {}
//Object in JS
const obj2 = new Object
//Funcção Construtora
function car(model, color, value) {
  this.model = model,
  this.color = color,
  this.value = value
  
  this.getColor = () =>{
    return color
  }
}
//Função factory
function criarFuncionario(nome, salario, faltas) {
  return {
    nome,
    salario,
    faltas,
    getSalario(){
      return (salario*30) * (30-faltas)
    }
  }
}

//----------------------------------------------------------------

//Notações literais

console.log("Literal Notations")

const [a, b, c] = [1, 2, 3]

const obj3 = {a, b, c}
console.log(obj3)

const nomeObj = "test"
const valorObj = "test"

const obj4 = {}
obj4[nomeObj]=valorObj

const obj5 ={ [nomeObj]:valorObj }

console.log(obj4)
console.log(obj5)

//----------------------------------------------------------------
//get e set são funções para acessar variáveis no objeto antes de retornar a variável
console.log("get and set")

const sequencia = {
  _valor: 1, //por convenção variáveis privadas começam com _ 

  get valor() {return this._valor++ },
  set valor(valor) {
    if(valor > this.valor) {
      this._valor = valor
    }
  }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 2000
console.log(sequencia.valor, sequencia.valor)

//----------------------------------------------------------------
//Funções de Objects
console.log("Functions' objects")

const obj6 = {
  nome: "math",
  idade: "24",
  peso: 78,
}

console.log(obj6)
console.log(Object.keys(obj6)) //mostra todas as chaves
console.log(Object.values(obj6)) //mostra todos os valores
console.log(Object.entries(obj6)) //mostra chave e valor em um array

Object.defineProperty(obj6, 'dataNasc', {  //usamos para definir uma nova chave e editar as cong dela
  enumerable: true, //mostra quando executa o keys ou value 
  writable: false, //permite alterar?
  value: "01/02/2020"
})

const obj = Object.assign(obj1, obj2, obj3, obj4) //assign concatena todos os outros objetos no primeiro (obj1)
console.log(obj)

Object.freeze(obj) //Congela objetos para não serem alterados

//-----------------------------------------------------
//Herança