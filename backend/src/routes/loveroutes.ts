import { getLove, postLove } from "../controllers/loveController.js";
import { Router } from "express";

const router = Router();

router.get("/", getLove);
router.post("/", postLove);

export default router;
