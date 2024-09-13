import axios from "axios"

const cepEndereco = (req, res, next) => {
    req.body.cep = req.body.cep.replaceAll(".", "").replaceAll("-", "");
    if(
        req.body.lenght == 8 &&
        !isNaN(Number(req.body.cep))
    ){
        axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`)
        .then(resposta => {
            delete req.body.cep

            req.body.endereco = resposta.data

            next()
        })
    } else {
        res.status(400).json()
    }
}

export default cepEndereco