const mongoose = require("mongoose");

const mongoDB = "mongodb+srv://jaaaoo:ut6CHrvuGxcus5k7@cluster0.rf1c2.mongodb.net/coisa"

async function main(){
    await mongoose.connect(mongoDB);

}

main()
    .then(() => console.log(`Conexão realizada com sucesso!`))
    .catch(err => console.log(err));

module.exports = mongoose