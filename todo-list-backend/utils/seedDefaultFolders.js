import TaskManager from "../models/TaskManager.js"

const defaultFolders = [
  { id: "completed" },
  { id: "today" },
  { id: "work" },
  { id: "personal" },
  { id: "important" },
  { id: "shopping" },
  { id: "study" },
  { id: "health" },
  { id: "finance" },
  { id: "travel" },
]

const seedDefaultFolders = async () => {
  const operations = defaultFolders.map((folder) => ({
    updateOne: {
      filter: { id: folder.id },
      update: {
        $setOnInsert: {
          id: folder.id,
          list: [],
        },
      },
      upsert: true,
    },
  }))

  await TaskManager.bulkWrite(operations)
}

export default seedDefaultFolders
