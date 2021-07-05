const express = require('express');
const app = express();

const port = 8000

const mongoose = require('mongoose');

//função de conexão com o MongoDB Atlas 
mongoose.connect('mongodb+srv://thammyrysbd:thammyrysbd@cluster0.pp6fk.mongodb.net/redeSocial?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology:true})

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static(__dirname + '/public'));

const anuncios_router = require('./routers/anuncios-router')
app.use('/anuncios', anuncios_router)

// app.get('/', (req, res) =>{
//     res.send("Página Inicial")
// })

app.get('/anuncios', (req, res) =>{
    res.send()
})

app.listen(port, () =>{
    console.log("Servidor rodando na porta 8000")
})
