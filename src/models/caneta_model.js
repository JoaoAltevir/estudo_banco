import db from "../db.js"

const Schema = db.Schema

const canetaSchema = new Schema({
    cor: {
        type: String,
        required: true,
    },
    ehBic: {
        type: Boolean,
        required: true
    }
})

const Caneta = db.model("caneta", canetaSchema);

export default Caneta