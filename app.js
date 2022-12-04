const express = require('express')
const multer = require ('multer')

const app = express()
const upload = multer({ dest: 'uploads/' })

app.use(express.json())

app.get('/',function(req, res){

    res.send('Hola mundo!')
})

app.post('/imagen', upload.single('imagen'),function (req, res){

    const body = req.body
    const imagen = req.file

    console.log(imagen)

    res.send('Hola mundo desde el POST')
})

app.listen(3000)