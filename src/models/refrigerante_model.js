import db from "../db.js"

const Schema = db.Schema

const refriSchema = new Schema({
    porcentagem_suco: {
        type: String,
        required: true,
    },
    kcal: {
        type: String,
        required: true
    },
    sabor: {
        type: String,
        required: true
    },
    tamanho: {
        type: String,
        required: true
    }
})

const Refrigerante = db.model("Refri", RefriSchema);

export default Refrigerante