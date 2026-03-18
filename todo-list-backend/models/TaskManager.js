import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true,
    },
    list:[
        {
            taskId:{
                type:String,
                required:true,
                default: () => new mongoose.Types.ObjectId().toString(),
            },
            task:{
                type:String,
                required:true,
                trim:true
            },
            isDone:{
                type:Boolean,
                default:false
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const TaskManager= mongoose.model("TaskManager",todoSchema)
export default TaskManager