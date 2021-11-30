import express from "express"
import UserController from "../../controllers/UserController"
const router = express.Router()
router.get("/lists",UserController.ListUsers)
router.get("/particular",UserController.UserByEmail)


export default router