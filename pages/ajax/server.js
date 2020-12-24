const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //carrega links estáticos
app.use(bodyParser.urlencoded({ extended: true })) //transforma tudo em json
app.use(bodyParser.json())

const multer = require('multer') //Interpreta o formulário que vem o arquivo de upload

const storage = multer.diskStorage({ //recebe um objeto para personalizar tanto a pasta quanto o nome do arquivo
    destination: function (req, file, callback) { //para dois arquivos com mesmo nome não sobrescreverem
        callback(null, './upload') //foi feita essa função.
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) //renomeia com a data na frente
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => { //requisição para upload feita via post
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')        //xmlHttpRequest
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {           //fetch
    res.send({
        ...req.body,
        id: 7
    })
})

app.get('/parOuImpar', (req, res) => {            //axios
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...')) //escutando na porta 8080