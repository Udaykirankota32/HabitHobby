import express from "express"

import {addTask,getTasks,deleteTask} from "../controllers/todoController.js"

const router=express.Router()

router.get("/:folderId/",getTasks)

router.post("/:folderId/tasks",addTask);

router.delete("/:folderId/tasks/:taskId",deleteTask)




export  default router
