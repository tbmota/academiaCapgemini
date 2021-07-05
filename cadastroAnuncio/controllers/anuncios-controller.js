const Anuncios = require('../models/anuncios-model')

exports.listar_anuncios = (req, res) =>{

    let anuncios = Anuncios.find({}, (err, anuncios) =>{

        if(err) {
            console.error(err)
            return res.status(500).send("Erro ao consultar anúncios")
        }
        res.render('pages/anuncios', {anuncios: anuncios})
    })
}

exports.cadastrar_anuncios_get = (req, res) => {
    res.render('pages/cadastrarAnuncios')
}

exports.cadastrar_anuncios_post = (req, res) => {
    console.log(req.body)

    let anuncio = new Anuncios()

    anuncio.anuncio = req.body.anuncio
    anuncio.cliente = req.body.cliente
    anuncio.dataInicio = req.body.dataInicio
    anuncio.dataTermino = req.body.dataTermino
    anuncio.investimento = req.body.investimento

    anuncio.save(err => {
        if(err)

        return res.status(500).send("Erro ao cadastrar anúncios")

        return res.redirect('/anuncios')
    })
}

exports.deletar_anuncios = (req, res) => {
    id = req.params.id

    Anuncios.deleteOne({_id: id}, (err, result) => {
        if(err)return res.status(500).send("Erro ao consultar anúncio")
    })

    res.redirect('/anuncios')
}


exports.editar_anuncios_get = (req, res) => {
    Anuncios.findById(req.params.id, (err, anuncio) => {

        if(err)
        return res.status(500).send("Erro ao consultar usuário")

        res.render('pages/editarAnuncios', {anuncio:anuncio})

        console.log(anuncio)
    })
}

exports.editar_anuncios_post = (req, res) => {
    console.log(id = req.body.id)

    Anuncios.findById(id, (err, anuncio) =>{

        console.log(req.body.anuncio)
        console.log(req.body.cliente)
        console.log(req.body.dataInicio)
        console.log(req.body.dataTermino)
        console.log(req.body.investimento)

        anuncio.anuncio = req.body.anuncio
        anuncio.cliente = req.body.cliente
        anuncio.dataInicio = req.body.dataInicio
        anuncio.dataTermino = req.body.dataTermino
        anuncio.investimento = req.body.investimento

        anuncio.save(err => {
            
            if(err)
            return res.status(500).send("Erro ao cadastrar usuário")
            return res.redirect('/anuncios')
        })
    })
}