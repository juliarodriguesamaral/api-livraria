import mongoose from "mongoose"

const autoriaSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String}
    },
    {
        versionKey: false
    }
)

const autorias = mongoose.model("autorias", autoriaSchema)

export default autorias