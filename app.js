const express = require('express')

const app = express()

app.get('/', function(req, res){

    res.send('Curriculum Vitae CV proximamente el guevo pelao')
})

const PORT = process.env.PORT || 5000


app.listen(PORT, function() {

    console.log("Servidor escuchando en el puerto,", PORT )
})

