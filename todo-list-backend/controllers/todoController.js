import TaskManager from "../models/TaskManager.js"



//get Tasks

export const getTasks=async(req,res)=>{
    try{

        const {folderId}=req.params
        const folder=await TaskManager.findOne({id:folderId})
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

    const folder=await TaskManager.findOne({id: folderId});

        if(!folder){
            return res.status(404).json({ message: "Folder not found" });       
        
        }
      folder.list.push({task: task.trim(), isDone})
            await folder.save()
       res.status(201).json(folder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
    
}