import TaskManager from "../models/TaskManager.js"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const defaultFolders = [
  "today",
  "work",
  "personal",
  "important",
  "shopping",
  "study",
  "health",
  "finance",
  "travel",
]

const seedDefaultFolders = async ({ userId, userName, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10)

  const operations = defaultFolders.map((folderValue) => ({
    updateOne: {
      filter: { "userDetails.userId": userId, folderName: folderValue },
      update: {
        $setOnInsert: {
          _id: new mongoose.Types.ObjectId(),
          userDetails: {
            userId,
            userName,
            email,
            password: hashedPassword,
          },
          folderName: folderValue,
          list: [],
        },
      },
      upsert: true,
    },
  }))

  await TaskManager.bulkWrite(operations)
}

export default seedDefaultFolders
