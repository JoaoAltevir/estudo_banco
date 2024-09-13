import express from "express"
const router = express.Router();
import refrigerante_controller from "../controllers/refrigerante_controller.js";

router.post("/", refrigerante_controller.store);
router.get("/", refrigerante_controller.index);
router.get("/:id", refrigerante_controller.show);
router.put("/:id", refrigerante_controller.update);
router.delete("/:id", refrigerante_controller.destroy);

export default router 