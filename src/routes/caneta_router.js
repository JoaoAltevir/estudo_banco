import express from "express"
const router = express.Router();
import caneta_controller from "../controllers/caneta_controller.js";

router.post("/", caneta_controller.store);
router.get("/", caneta_controller.index);
router.get("/:id", caneta_controller.show);
router.put("/:id", caneta_controller.update);
router.delete("/:id", caneta_controller.destroy);

export default router
