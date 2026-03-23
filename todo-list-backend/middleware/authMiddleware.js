import jwt from "jsonwebtoken"

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || ""

    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization token missing" })
    }

    const token = authHeader.split(" ")[1]

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "todo_app_secret")

    req.user = decoded
    return next()
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" })
  }
}

export default authMiddleware
