
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)



app.use(saudacao('Guilherme'))
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/opa',(req,res, next) => {
    console.log('ANTES')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`CLiente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req,res) =>{
    /* let corpo = ''
    req.on('data', function(parte){
        corpo += parte
    })
    req.on('end', function(){
        res.send(corpo)
    }) */
    res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})



app.use('/opa', (req,res, next) => {
    console.log('DURANTE')
    res.json({       
        data: [{id: 7,name: 'Ana', position: 1},
        {id: 9,name: 'Joana', position: 9},
        {id: 89,name: 'Francisco', position: 6}

        ],
        count: 30,
        skip:0,
        limit:3,
        status: 200
        
        
        /* [{id: 7,name: 'Ana', position: 1},
            {id: 9,name: 'Joana', position: 9},
            {id: 89,name: 'Francisco', position: 6}
        ])
        */

        /*  res.json({
                name: 'opad 32 gb',
                price: 1899.00,
                discount: 0.12
            }) */
            // res.send('<h1>Estou <b>bem</b></h1>')

            
        })
        next()
})

app.use('/opa',(req,res) => {
    console.log('DEPOIS')
})

app.listen(3000, () => {
 console.log('backend executando')
})
