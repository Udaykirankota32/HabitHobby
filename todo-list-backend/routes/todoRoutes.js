import express from "express"

import {addTask,getTasks} from "../controllers/todoController.js"

const router=express.Router()

router.get("/:folderId/",getTasks)

router.post("/:folderId/tasks",addTask);



export  default router
