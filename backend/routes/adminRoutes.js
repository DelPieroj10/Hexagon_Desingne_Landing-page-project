import express from "express";
import { login, verifyAdmin } from "../controllers/adminController.js";

const router = express.Router();

router.get("/admin/verify", verifyAdmin,(req, res) => {
  res.json({ success: true, message: "Admin access verified 🔓" });
});
router.post("/admin/login", login);

export default router;