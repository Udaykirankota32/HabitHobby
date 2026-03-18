
import express, { json } from "express";
import dotenv from "dotenv"
import cors from "cors"
import connectdb from "./config/db.js"
import todoRoutes from "./routes/todoRoutes.js"
import seedDefaultFolders from "./utils/seedDefaultFolders.js"

const app=express()

dotenv.config()

app.use(cors()) 
app.use(json()) // to read json files

app.use("/api/todos",todoRoutes)

app.get("/",(request,response)=>{
    response.send("API running");

})

   

const Port=process.env.PORT || 5000

const startServer = async () => {
    try {
        await connectdb();
        await seedDefaultFolders();
        app.listen(Port,()=>{
            console.log("server is connected")
        })
    }
    catch (error) {
        console.error("Failed to start server", error.message)
    }
    
}

startServer()