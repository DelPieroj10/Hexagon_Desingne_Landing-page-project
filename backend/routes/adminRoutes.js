import express from "express";
import { login, verifyAdmin } from "../controllers/adminController.js";
import { getContactsController } from "../controllers/contactController.js";

const router = express.Router();

router.post("/admin/login", login);
router.get("/admin/verify", verifyAdmin,(req, res) => {
  res.json({ success: true, message: "Admin access verified 🔓" });
});
router.get("/contacts", verifyAdmin, getContactsController);

export default router;