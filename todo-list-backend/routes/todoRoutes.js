import express from "express"

import { addTask, getTasks, deleteTask, registerUser, loginUser } from "../controllers/todoController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)

router.get("/:folderId/", authMiddleware, getTasks)

router.post("/:folderId/tasks", authMiddleware, addTask)

router.delete("/:folderId/tasks/:taskId", authMiddleware, deleteTask)




export default router
