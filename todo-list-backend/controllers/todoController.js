import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import TaskManager from "../models/TaskManager.js"
import seedDefaultFolders from "../utils/seedDefaultFolders.js"

const buildToken = (user) => {
  const payload = {
    userId: user.userId,
    userName: user.userName,
    email: user.email,
  }

  return jwt.sign(payload, process.env.JWT_SECRET || "todo_app_secret", {
    expiresIn: "7d",
  })
}

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name?.trim() || !email?.trim() || !password?.trim()) {
      return res.status(400).json({ message: "Name, email and password are required" })
    }

    const normalizedEmail = email.trim().toLowerCase()
    const normalizedName = name.trim()

    const existingUser = await TaskManager.findOne({ "userDetails.email": normalizedEmail })

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" })
    }

    const userId = new mongoose.Types.ObjectId().toString()

    await seedDefaultFolders({
      userId,
      userName: normalizedName,
      email: normalizedEmail,
      password: password.trim(),
    })

    const user = {
      userId,
      userName: normalizedName,
      email: normalizedEmail,
    }

    const token = buildToken(user)

    return res.status(201).json({
      message: "User registered successfully",
      token,
      user,
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email?.trim() || !password?.trim()) {
      return res.status(400).json({ message: "Email and password are required" })
    }

    const normalizedEmail = email.trim().toLowerCase()

    const userFolder = await TaskManager.findOne({ "userDetails.email": normalizedEmail })

    if (!userFolder) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const isPasswordMatched = await userFolder.comparePassword(password.trim())

    if (!isPasswordMatched) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const user = {
      userId: userFolder.userDetails.userId,
      userName: userFolder.userDetails.userName,
      email: userFolder.userDetails.email,
    }

    const token = buildToken(user)

    return res.status(200).json({
      message: "Login successful",
      token,
      user,
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getTasks = async (req, res) => {
  try {
    const { folderId } = req.params
    const { userId } = req.user

    const folder = await TaskManager.findOne({
      "userDetails.userId": userId,
      folderName: folderId,
    })

    if (!folder) {
      return res.status(404).json({ message: "Folder not found" })
    }

    return res.status(200).json(folder)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const addTask = async (req, res) => {
  try {
    const { folderId } = req.params
    const { task, isDone = false } = req.body
    const { userId } = req.user

    if (!task || !task.trim()) {
      return res.status(400).json({ message: "Task is required" })
    }

    const folder = await TaskManager.findOne({
      "userDetails.userId": userId,
      folderName: folderId,
    })

    if (!folder) {
      return res.status(404).json({ message: "Folder not found" })
    }

    folder.list.push({
      taskId: new mongoose.Types.ObjectId().toString(),
      task: task.trim(),
      isDone,
    })

    await folder.save()

    return res.status(201).json(folder)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { folderId, taskId } = req.params
    const { userId } = req.user

    const folder = await TaskManager.findOne({
      "userDetails.userId": userId,
      folderName: folderId,
    })

    if (!folder) {
      return res.status(404).json({ message: "Folder not found" })
    }

    folder.list = folder.list.filter(
      (eachTask) => eachTask.taskId !== taskId && eachTask._id.toString() !== taskId,
    )

    await folder.save()

    return res.status(200).json(folder)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}