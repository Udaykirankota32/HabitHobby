import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const todoSchema=new mongoose.Schema({
    userDetails:{
        userId:{
            type:String,
            required:true,
            default:()=>new mongoose.Types.ObjectId().toString(),
        },

        userName:{
            type:String,
            required:true,
            trim:true,

        },

        email:{
            type:String,
            required:true,
            trim:true,
        },

        password:{
            type:String,
            required:true,
        }

    },
    folderName:{
        type: String,
        required: true,
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

todoSchema.index({ "userDetails.userId": 1, folderName: 1 }, { unique: true })
todoSchema.index({ "userDetails.email": 1 })

todoSchema.pre("save", async function hashPassword(next) {
    if (!this.isModified("userDetails.password")) {
        return next()
    }

    this.userDetails.password = await bcrypt.hash(this.userDetails.password, 10)
    next()
})

todoSchema.methods.comparePassword = function comparePassword(password) {
    return bcrypt.compare(password, this.userDetails.password)
}

todoSchema.set("toJSON", {
    transform: (_, ret) => {
        if (ret.userDetails) {
            delete ret.userDetails.password
        }
        return ret
    },
})

const TaskManager= mongoose.model("TaskManager",todoSchema)

export default TaskManager