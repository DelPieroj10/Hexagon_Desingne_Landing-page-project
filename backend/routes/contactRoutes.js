import express from "express";
import { sendController, getContactsController } from "../controllers/contactController.js";
import { verifyAdminToken } from "../middleware/auth.js";
import { verifyAdmin } from "../controllers/adminController.js";

const router = express.Router();

router.post("/contact", sendController);
router.get("/contacts", verifyAdmin, getContactsController);

export default router;
