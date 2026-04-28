import express from "express";
import { sendController, getContactsController } from "../controllers/contactController.js";
import { verifyAdminToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/contact", sendController);
router.get("/contacts", verifyAdminToken, getContactsController);

export default router;
