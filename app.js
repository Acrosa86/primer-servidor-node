const express = require('express')
const multer = require ('multer')
const sharp = require('sharp')
const fs = require('fs')

const app = express()

const storageStrategy = multer.memoryStorage()
const upload = multer({ storage: storageStrategy })

app.use(express.json())

app.get('/',function(req, res){

    res.send('Hola mundo!')
})

app.post('/imagen', upload.single('imagen'), async function (req, res){

        const imagen = req.file

        const processedImage = sharp(imagen.buffer)

        const resizedImage = processedImage.resize(1200, 400, {
            fit: "contain"
        })

        const resizedImageBuffer = await resizedImage.toBuffer()

        fs.writeFileSync('nuevaruta/prueba.png',resizedImageBuffer)

    console.log(resizedImageBuffer)

    res.send('Hola mundo desde el POST probando NODEMON')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, function(){
    console.log("Servidor escuchando en el puerto", PORT)
})