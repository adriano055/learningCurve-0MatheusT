//Aqui temos uma função que retorna uma função middleware

function saudacao(nome) {
  return function(req, res, next) {
      console.log(`Seja bem vindo ${nome}.`)
      
      next()
  }
}

module.exports = saudacao