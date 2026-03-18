import TaskManager from "../models/TaskManager.js"
import mongoose from "mongoose"

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

const seedDefaultFolders = async () => {
  const folderKey = TaskManager.schema.path("folderName") ? "folderName" : "id"

  const operations = defaultFolders.map((folderValue) => ({
    updateOne: {
      filter: { [folderKey]: folderValue },
      update: {
        $setOnInsert: {
          _id: new mongoose.Types.ObjectId(),
          [folderKey]: folderValue,
          list: [],
        },
      },
      upsert: true,
    },
  }))

  await TaskManager.bulkWrite(operations)
}

export default seedDefaultFolders
