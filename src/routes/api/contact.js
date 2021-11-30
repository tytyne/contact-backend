import express from "express"
import ContactController from "../../controllers/ContactController"
const router = express.Router()
router.post("/store",ContactController.PostContact)
router.get("/lists",ContactController.ListContact)


export default router