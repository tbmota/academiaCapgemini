const mongoose = require('mongoose')

const Anuncios = mongoose.model('Anuncios', {

    anuncio: String,
    cliente: String,
    dataInicio: String,
    dataTermino: String,
    investimento: Number
})

module.exports = Anuncios;