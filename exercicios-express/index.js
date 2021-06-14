const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')

app.use(saudacao('Guilherme'))

app.use('/opa',(req,res, next) => {
    console.log('ANTES')
    next()
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
