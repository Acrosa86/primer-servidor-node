const express = require('express')

const app = express()

app.use(express.json())

app.get('/',function(req, res){

    res.send('Hola mundo!')
})

app.post('/imagen', function (req, res){

    const body = req.body

    console.log(body)

    res.send('Hola mundo desde el POST')
})

app.listen(3000)