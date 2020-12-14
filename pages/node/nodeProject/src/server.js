const port = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./db')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next)=>{
  res.send(bancoDeDados.getProdutos()) 
})

app.get('/produtos/:id', (req, res, next)=>{
  res.send(bancoDeDados.getProduto(req.params.id)) //dois pontos significam param - parametros
})

app.post('/produtos', (req, res, next)=>{
  const produto = bancoDeDados.salvarProdutos({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) //Gerando um JSON da Req.
})

app.put('/produtos/:id', (req, res, next)=>{
  const produto = bancoDeDados.salvarProdutos({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})


app.listen(port, ()=>{
  console.log(`Server on, port: ${port}`)
})

app.delete('/produtos/:id', (req, res, next)=>{
  const produto = bancoDeDados.excluirProdutos(req.params.id)
  res.send(produto)
})


app.listen(port, ()=>{
  console.log(`Server on, port: ${port}`)
})

//Criada a porta para liberar o server. Feito o middleware e impressa mensagem na tela confirmando.