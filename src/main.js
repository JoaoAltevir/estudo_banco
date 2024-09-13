import express from "express"
const app = express();
const port = 3000;
import moto_router from "./routes/moto_router.js"
import refrigerante_router from "./routes/refrigerante_router.js"
import caneta_router from "./routes/caneta_router.js";
import aeroporto_router from "./routes/aeroporto_router.js"
app.use(express.json());


app.use("/moto", moto_router);
app.use("/refrigerante", refrigerante_router);
app.use("/caneta", caneta_router);
app.use("/aeroporto", aeroporto_router);
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})