import mongoose from "mongoose";

const mongoDB = "mongodb+srv://jaaaoo:ut6CHrvuGxcus5k7@cluster0.rf1c2.mongodb.net/"
const database = "coisa";

async function main(){
    await mongoose.connect(mongoDB + database);

}

main()
    .then(() => console.log(`Conexão realizada com sucesso!`))
    .catch(err => console.log(err));

export default mongoose