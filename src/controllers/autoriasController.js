import autorias from "../models/Autoria.js"

class AutoriaController {

    static listarAutorias = (req, res) => {
        autorias.find((err, autorias) => {
            res.status(200).json(autorias)
        })
    }

    static listarAutoriaPorId = (req, res) => {
        const id = req.params.id

        autorias.findById(id, (err, autorias) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id da autoria não localizado`})
            } else {
                res.status(200).send(autorias)
            }
        })
    }

    static cadastrarAutoria = (req, res) => {
        let autoria = new autorias(req.body)

        autoria.save((err) => {

            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar autoria.`})
            } else {
                res.status(201).send(autoria.toJSON())
            }
        })
    }

    static atualizarAutoria = (req, res) => {
        const id = req.params.id

        autorias.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Autoria atualizada com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirAutoria = (req,res) => {
        const id = req.params.id

        autorias.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Autoria removida com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default AutoriaController