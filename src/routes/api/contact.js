import express from "express"
import ContactValidator from "../../validation/contactValidation"
import ContactController from "../../controllers/ContactController"
const router = express.Router()
router.post("/store",ContactValidator.post,ContactController.PostContact)
router.get("/lists",ContactController.ListContact)
router.put("/update/:id",ContactValidator.post,ContactController.updatingContact)
router.delete("/remove/:id",ContactController.deleteContact)
// router.get("/search/?input=input",ContactController.searchContact)


export default router