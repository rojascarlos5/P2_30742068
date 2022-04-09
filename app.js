const express = require('express')

const app = express()

app.get('/', function(req, res){

    res.send('Curriculum Vitae (CV) proximamente', 
    'En espera de repuesta por parte del "administrador" de la pagina')
})

const PORT = process.env.PORT

app.listen(PORT, function() {

    console.log("Servidor escuchando en el puerto,", PORT)
})

