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
//Toda função tem um Objeto prototype, se não for especificado fica o padrão (root) que é o Object.prototype

console.log(obj.__proto__ === Object.prototype) //

const avo = {attr1: 'A'}
const pai = {__proto__:avo, attr2: 'B'}
const filho = {__proto__:pai, attr3: 'C'}

console.log(filho.attr1) //Nesse caso, como filho não tem attr1, busca no pai, depois no avô. Se avô não tivesse, buscaria no Object.protorype.


//Exemplo

const carzin = {
  velMax: 200,
  velAtual: 0,
  acelera(delta){
    if(this.velAtual + delta <= this.velMax){
      this.velAtual += delta
    }else{
      this.velAtual = this.velMax
    }
  },

  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h `
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 350, //Shadowing - Quando o atributo sombreia o atributo do prototype. (usa o da objeto criado e não o do modelo)
}

const hyundai = {
  modelo: 'hb20',

  status() {
    return `${this.modelo}: ${super.status()}` //O super. pega as informações do prototype acima.
  },
}

Object.setPrototypeOf(ferrari,carzin) //Seta o prototype de ferrari como carro (ferrari é filha de carro)
Object.setPrototypeOf(hyundai,carzin)

console.log(ferrari)

ferrari.acelera(100)
console.log(ferrari.status())

console.log(hyundai)

hyundai.acelera(200)
console.log(hyundai.status())

//Object.create - Pega como base o pai e já seta o prototype ao invés de ter que setar depois
const father = {cabelo: "preto", nome: "Joao"}

const daugther1 = Object.create(father)
daugther1.nome = "Maria"

console.log(daugther1.nome)
console.log(daugther1.cabelo)

const daugther2 = Object.create(pai,{
  nome: {value: "Bia", writable: false, enumerable: true}
})

console.log(daugther2.nome)

console.log(Object.keys(daugther1))
console.log(Object.keys(daugther2))

for (let keys in daugther2){
  daugther2.hasOwnProperty(keys) ? console.log(keys) : console.log(`Por herança: ${keys}`)
}

//Todas os objetos criados a partir da mesma função construtora tem o mesmo prototype.

function myObject() {}

console.log(myObject.__proto__)

const ob1 = new myObject()
const ob2 = new myObject()

console.log(ob1.__proto__, ob2.__proto__)

// -------------------------------------------------------

//Para evitar modificações na hora de criar o objeto podemos usar as seguintes funções:
//Object.preventExtensions() - Não deixa criar novos atributos, porem permite modificar ou excluir os existentes
//Object.Seal() - Sela o objeto, não podendo excluir, modificar ou atribuir novos parametros

// -------------------------------------------------------
//JSON vs Objetos

console.log(JSON.stringify(carzin))
console.log(JSON.parse('{"velMax":200,"velAtual":0}'))

