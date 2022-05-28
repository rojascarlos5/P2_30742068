const express = require('express')

const app = express()

app.get('/', function(req, res){

    res.send('Curriculum Vitae CV proximamente')
})

const PORT = process.env.PORT

app.listen(PORT, function() {

    console.log("Servidor escuchando en el puerto,", PORT )
})

