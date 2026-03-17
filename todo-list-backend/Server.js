
import express, { json } from "express";
import dotenv from "dotenv"
import cors from "cors"
import connectdb from "./config/db.js"
import todoRoutes from "./routes/todoRoutes.js"
import TaskManager from "./models/Todo.js"

const app=express()

dotenv.config()

app.use(cors()) 
app.use(json()) // to read json files

connectdb();

app.use("/api/todos",todoRoutes)

app.get("/",(request,response)=>{
    response.send("API running");

})

app.post("/api/todos", async (req, res) => {
    try {
        const { id, list = [] } = req.body

        if (!id || !id.trim()) {
            return res.status(400).json({ message: "id is required" })
        }

        const existingFolder = await TaskManager.findOne({ id: id.trim() })

        if (existingFolder) {
            return res.status(409).json({ message: "Folder id already exists" })
        }

        const newFolder = await TaskManager.create({
            id: id.trim(),
            list
        })

        res.status(201).json(newFolder)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

const Port=process.env.PORT || 5000

app.listen(Port,()=>{
    console.log("server is connected")
})