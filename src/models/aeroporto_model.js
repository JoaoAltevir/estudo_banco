import db from "../db.js"

const Schema = db.Schema

const aeroportoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    adress: {
        type: Schema.Types.Array,
        required: true
    }
})

const Aeroporto = db.model("Aeroporto", aeroportoSchema);

export default Aeroporto