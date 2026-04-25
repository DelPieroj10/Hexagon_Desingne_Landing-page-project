import express from "express";
import { sendController } from "../controllers/contactController.js";

const router = express.Router();

router.post("/contact", sendController);

export default router;
