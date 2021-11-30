import express from "express";
import User from "./user";
import Contact from "./contact"

const router = express.Router();

router.use("/user", User);
router.use("/contact", Contact);

export default router;