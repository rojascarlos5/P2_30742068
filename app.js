const express = require('express')

const app = express()

app.get('/', function(req, res){

    res.send('Hola mmgvo')
})

app.listen(3000)

