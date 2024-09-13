import cepEndereco from "../middlewares/cepEndereco.js";
import express from "express";
const router = express.Router();
import aeroporto_controller from "../controllers/aeroporto_controller.js";

router.post("/", cepEndereco, aeroporto_controller.store);
router.get("/", aeroporto_controller.index);
router.get("/:id", aeroporto_controller.show);
router.put("/:id", aeroporto_controller.update);
router.delete("/:id", aeroporto_controller.destroy);

export default router
