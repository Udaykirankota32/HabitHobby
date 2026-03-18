import TaskManager from "../models/TaskManager.js"
import mongoose from "mongoose"

const getFolderFilter = (folderValue) => {
    const folderKey = TaskManager.schema.path("folderName") ? "folderName" : "id"
    return { [folderKey]: folderValue }
}



//get Tasks

export const getTasks=async(req,res)=>{
    try{

        const {folderId}=req.params
    const folder=await TaskManager.findOne(getFolderFilter(folderId))
        if(!folder) {
            return res.status(404).json({ message: "Folder not found" });       
        
        }
        res.status(200).json(folder);


    }
    catch(error){
            res.status(500).json({ message: error.message });

    }
}

//add Task

export const addTask=async(req,res)=>{
    try{
        const {folderId}=req.params
    const {task,isDone=false}=req.body

    if(!task || !task.trim()){
      return res.status(400).json({message:"Task is required"})
    }

    const folder=await TaskManager.findOne(getFolderFilter(folderId));

        if(!folder){
            return res.status(404).json({ message: "Folder not found" });       
        
        }
      folder.list.push({
        taskId: new mongoose.Types.ObjectId().toString(),
        task: task.trim(), 
        isDone
      })
            await folder.save()
       res.status(201).json(folder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
    
}


//delete Task

export const deleteTask=async(req,res)=>{
    try{
        const {folderId,taskId}=req.params
    const folder=await TaskManager.findOne(getFolderFilter(folderId))

        if(!folder) {
           return  res.status(404).json({message: "folder not found"})
        }
        
       folder.list = folder.list.filter(
             eachTask => eachTask.taskId !== taskId && eachTask._id.toString() !== taskId
        )
      await folder.save()
        return res.status(200).json(folder)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
