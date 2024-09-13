import express from "express"
const router = express.Router();
import moto_controller from "../controllers/moto_controllers.js";

router.post("/", moto_controller.store);
router.get("/", moto_controller.index);
router.get("/:id", moto_controller.show);
router.put("/:id", moto_controller.update);
router.delete("/:id", moto_controller.destroy);

export default router

