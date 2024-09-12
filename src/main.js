const express = require("express");
const app = express();
const port = 3000;
const moto_router = require("./routes/moto_router.js");
const refrigerante_router = require("./routes/refrigerante_router.js");
const caneta_router = require("./routes/caneta_router.js");
app.use(express.json());

app.use("/moto", moto_router);
app.use("/refrigetante", refrigerante_router);
app.use("/caneta", caneta_router);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})